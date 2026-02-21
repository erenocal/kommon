import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getUserFromSession } from '@/lib/auth';
import { updateListingSchema } from '@/lib/listing-validation';

const prisma = new PrismaClient();

// GET /api/listings/[id] - Get single listing
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const listing = await prisma.roomListing.findUnique({
      where: { id },
      include: {
        profile: {
          select: {
            id: true,
            fullName: true,
            university: true,
            major: true,
            academicYear: true,
            bio: true,
            profilePhotoUrl: true,
            userType: true,
          },
        },
      },
    });

    if (!listing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }

    if (!listing.isActive) {
      return NextResponse.json({ error: 'Listing is no longer active' }, { status: 410 });
    }

    return NextResponse.json(listing);
  } catch (error: any) {
    console.error('Error fetching listing:', error);
    return NextResponse.json(
      { error: 'Failed to fetch listing' },
      { status: 500 }
    );
  }
}

// PATCH /api/listings/[id] - Update listing
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    // Check if listing exists and belongs to user
    const existingListing = await prisma.roomListing.findUnique({
      where: { id },
    });

    if (!existingListing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }

    if (existingListing.profileId !== profile.id) {
      return NextResponse.json(
        { error: 'You can only update your own listings' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const validatedData = updateListingSchema.parse(body);

    // Update listing
    const updatedListing = await prisma.roomListing.update({
      where: { id },
      data: {
        ...(validatedData.title && { title: validatedData.title }),
        ...(validatedData.description && { description: validatedData.description }),
        ...(validatedData.monthlyRent && { monthlyRent: validatedData.monthlyRent }),
        ...(validatedData.neighborhood && { neighborhood: validatedData.neighborhood }),
        ...(validatedData.address !== undefined && { address: validatedData.address }),
        ...(validatedData.roomType && { roomType: validatedData.roomType }),
        ...(validatedData.availableFrom && { availableFrom: new Date(validatedData.availableFrom) }),
        ...(validatedData.leaseEndDate !== undefined && {
          leaseEndDate: validatedData.leaseEndDate ? new Date(validatedData.leaseEndDate) : null,
        }),
        ...(validatedData.amenities && { amenities: validatedData.amenities }),
        ...(validatedData.photos && { photos: validatedData.photos }),
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

    return NextResponse.json(updatedListing);
  } catch (error: any) {
    console.error('Error updating listing:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update listing' },
      { status: 400 }
    );
  }
}

// DELETE /api/listings/[id] - Delete/deactivate listing
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    // Check if listing exists and belongs to user
    const existingListing = await prisma.roomListing.findUnique({
      where: { id },
    });

    if (!existingListing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }

    if (existingListing.profileId !== profile.id) {
      return NextResponse.json(
        { error: 'You can only delete your own listings' },
        { status: 403 }
      );
    }

    // Soft delete by setting isActive to false
    await prisma.roomListing.update({
      where: { id },
      data: { isActive: false },
    });

    return NextResponse.json({ message: 'Listing deactivated successfully' });
  } catch (error: any) {
    console.error('Error deleting listing:', error);
    return NextResponse.json(
      { error: 'Failed to delete listing' },
      { status: 500 }
    );
  }
}
