import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getUserFromSession } from '@/lib/auth';
import { createListingSchema, listingSearchSchema } from '@/lib/listing-validation';

const prisma = new PrismaClient();

// GET /api/listings - Browse and search listings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parse query parameters
    const filters = {
      minRent: searchParams.get('minRent') ? Number(searchParams.get('minRent')) : undefined,
      maxRent: searchParams.get('maxRent') ? Number(searchParams.get('maxRent')) : undefined,
      neighborhoods: searchParams.get('neighborhoods')?.split(',').filter(Boolean),
      roomType: searchParams.get('roomType') as 'private_room' | 'shared_room' | undefined,
      availableFrom: searchParams.get('availableFrom') || undefined,
      amenities: searchParams.get('amenities')?.split(',').filter(Boolean),
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 20,
      sortBy: (searchParams.get('sortBy') as 'newest' | 'price_low' | 'price_high' | 'available_soon') || 'newest',
    };

    // Validate search parameters
    const validatedFilters = listingSearchSchema.parse(filters);

    // Build where clause
    const where: any = {
      isActive: true,
    };

    if (validatedFilters.minRent !== undefined || validatedFilters.maxRent !== undefined) {
      where.monthlyRent = {};
      if (validatedFilters.minRent !== undefined) where.monthlyRent.gte = validatedFilters.minRent;
      if (validatedFilters.maxRent !== undefined) where.monthlyRent.lte = validatedFilters.maxRent;
    }

    if (validatedFilters.neighborhoods && validatedFilters.neighborhoods.length > 0) {
      where.neighborhood = { in: validatedFilters.neighborhoods };
    }

    if (validatedFilters.roomType) {
      where.roomType = validatedFilters.roomType;
    }

    if (validatedFilters.availableFrom) {
      where.availableFrom = { lte: new Date(validatedFilters.availableFrom) };
    }

    // Build orderBy clause
    let orderBy: any = {};
    switch (validatedFilters.sortBy) {
      case 'newest':
        orderBy = { createdAt: 'desc' };
        break;
      case 'price_low':
        orderBy = { monthlyRent: 'asc' };
        break;
      case 'price_high':
        orderBy = { monthlyRent: 'desc' };
        break;
      case 'available_soon':
        orderBy = { availableFrom: 'asc' };
        break;
    }

    // Calculate pagination
    const skip = (validatedFilters.page - 1) * validatedFilters.limit;

    // Fetch listings with profile information
    const [listings, total] = await Promise.all([
      prisma.roomListing.findMany({
        where,
        orderBy,
        skip,
        take: validatedFilters.limit,
        include: {
          profile: {
            select: {
              id: true,
              fullName: true,
              university: true,
              profilePhotoUrl: true,
              userType: true,
            },
          },
        },
      }),
      prisma.roomListing.count({ where }),
    ]);

    return NextResponse.json({
      listings,
      pagination: {
        page: validatedFilters.page,
        limit: validatedFilters.limit,
        total,
        totalPages: Math.ceil(total / validatedFilters.limit),
      },
    });
  } catch (error: any) {
    console.error('Error fetching listings:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch listings' },
      { status: 400 }
    );
  }
}

// POST /api/listings - Create new listing
export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromSession(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user profile
    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
    });

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Only providers can create listings
    if (profile.userType !== 'provider') {
      return NextResponse.json(
        { error: 'Only users with provider profiles can create listings' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const validatedData = createListingSchema.parse(body);

    // Create listing
    const listing = await prisma.roomListing.create({
      data: {
        profileId: profile.id,
        title: validatedData.title,
        description: validatedData.description,
        monthlyRent: validatedData.monthlyRent,
        neighborhood: validatedData.neighborhood,
        address: validatedData.address,
        roomType: validatedData.roomType,
        availableFrom: new Date(validatedData.availableFrom),
        leaseEndDate: validatedData.leaseEndDate ? new Date(validatedData.leaseEndDate) : null,
        amenities: validatedData.amenities || [],
        photos: validatedData.photos || [],
      },
      include: {
        profile: {
          select: {
            id: true,
            fullName: true,
            university: true,
            profilePhotoUrl: true,
          },
        },
      },
    });

    return NextResponse.json(listing, { status: 201 });
  } catch (error: any) {
    console.error('Error creating listing:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create listing' },
      { status: 400 }
    );
  }
}
