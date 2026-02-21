'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Home, MapPin, DollarSign, Calendar, Search, SlidersHorizontal } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  description: string;
  monthlyRent: number;
  neighborhood: string;
  roomType: string;
  availableFrom: string;
  photos: string[];
  profile: {
    id: string;
    fullName: string;
    university: string;
    profilePhotoUrl: string | null;
  };
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Home, MapPin, Calendar, SlidersHorizontal } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  description: string;
  monthlyRent: number;
  neighborhood: string;
  roomType: string;
  availableFrom: string;
  photos: string[];
  profile: {
    id: string;
    fullName: string;
    university: string;
    profilePhotoUrl: string | null;
  };
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

function ListingsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [listings, setListings] = useState<Listing[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Filter state
  const [filters, setFilters] = useState({
    minRent: searchParams.get('minRent') || '',
    maxRent: searchParams.get('maxRent') || '',
    neighborhoods: searchParams.get('neighborhoods')?.split(',') || [],
    roomType: searchParams.get('roomType') || '',
    sortBy: searchParams.get('sortBy') || 'newest',
  });

  useEffect(() => {
    fetchListings();
  }, [searchParams]);

  const fetchListings = async () => {
    try {
      setLoading(true);
      const queryString = searchParams.toString();
      const response = await fetch(`/api/listings?${queryString}`, {
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setListings(data.listings);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (filters.minRent) params.set('minRent', filters.minRent);
    if (filters.maxRent) params.set('maxRent', filters.maxRent);
    if (filters.neighborhoods.length > 0) params.set('neighborhoods', filters.neighborhoods.join(','));
    if (filters.roomType) params.set('roomType', filters.roomType);
    if (filters.sortBy) params.set('sortBy', filters.sortBy);

    router.push(`/listings?${params.toString()}`);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setFilters({
      minRent: '',
      maxRent: '',
      neighborhoods: [],
      roomType: '',
      sortBy: 'newest',
    });
    router.push('/listings');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F5F2' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '16px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/dashboard" style={{ fontSize: '24px', fontWeight: 'bold', color: '#2E3A4B', textDecoration: 'none' }}>
            Kommon
          </Link>
          <Link
            href="/listings/create"
            style={{
              backgroundColor: '#C86A50',
              color: '#F7F5F2',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Create Listing
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '8px', fontFamily: 'Nunito, sans-serif' }}>
            Available Rooms
          </h1>
          <p style={{ fontSize: '18px', color: '#6B7280', fontFamily: 'Lora, serif' }}>
            Find your perfect room in NYC
          </p>
        </div>

        {/* Filters and Sort */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            <SlidersHorizontal size={20} />
            Filters
          </button>

          <select
            value={filters.sortBy}
            onChange={(e) => {
              const newFilters = { ...filters, sortBy: e.target.value };
              setFilters(newFilters);
              const params = new URLSearchParams(searchParams.toString());
              params.set('sortBy', e.target.value);
              router.push(`/listings?${params.toString()}`);
            }}
            style={{
              padding: '10px 16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <option value="newest">Newest First</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="available_soon">Available Soon</option>
          </select>

          {pagination && (
            <div style={{ marginLeft: 'auto', padding: '10px 0', color: '#6B7280' }}>
              Showing {listings.length} of {pagination.total} listings
            </div>
          )}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: '#2E3A4B' }}>
              Filter Listings
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Min Rent
                </label>
                <input
                  type="number"
                  value={filters.minRent}
                  onChange={(e) => setFilters({ ...filters, minRent: e.target.value })}
                  placeholder="$500"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Max Rent
                </label>
                <input
                  type="number"
                  value={filters.maxRent}
                  onChange={(e) => setFilters({ ...filters, maxRent: e.target.value })}
                  placeholder="$3000"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                  Room Type
                </label>
                <select
                  value={filters.roomType}
                  onChange={(e) => setFilters({ ...filters, roomType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                  }}
                >
                  <option value="">All Types</option>
                  <option value="private_room">Private Room</option>
                  <option value="shared_room">Shared Room</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={applyFilters}
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#C86A50',
                  color: '#F7F5F2',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#FFFFFF',
                  color: '#6B7280',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* Listings Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#6B7280' }}>
            Loading listings...
          </div>
        ) : listings.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <Home size={48} style={{ margin: '0 auto 16px', color: '#9CA3AF' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '8px' }}>
              No listings found
            </h3>
            <p style={{ color: '#6B7280', marginBottom: '16px' }}>
              Try adjusting your filters or check back later
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {listings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listings/${listing.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #E5E7EB',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Listing Image */}
                  <div style={{ height: '200px', backgroundColor: '#E5E7EB', position: 'relative' }}>
                    {listing.photos && listing.photos.length > 0 ? (
                      <img
                        src={listing.photos[0]}
                        alt={listing.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Home size={48} style={{ color: '#9CA3AF' }} />
                      </div>
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: '#C86A50',
                        color: '#F7F5F2',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                      }}
                    >
                      ${listing.monthlyRent}/mo
                    </div>
                  </div>

                  {/* Listing Details */}
                  <div style={{ padding: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '8px', fontFamily: 'Nunito, sans-serif' }}>
                      {listing.title}
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: '#6B7280' }}>
                      <MapPin size={16} />
                      <span style={{ fontSize: '14px' }}>{listing.neighborhood}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', color: '#6B7280' }}>
                      <Calendar size={16} />
                      <span style={{ fontSize: '14px' }}>Available {formatDate(listing.availableFrom)}</span>
                    </div>

                    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '12px', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {listing.description}
                    </p>

                    {/* Provider Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: '1px solid #E5E7EB' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#E5E7EB', overflow: 'hidden' }}>
                        {listing.profile.profilePhotoUrl ? (
                          <img
                            src={listing.profile.profilePhotoUrl}
                            alt={listing.profile.fullName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7280', fontWeight: 'bold' }}>
                            {listing.profile.fullName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#2E3A4B' }}>
                          {listing.profile.fullName}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6B7280' }}>
                          {listing.profile.university}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString());
                  params.set('page', page.toString());
                  router.push(`/listings?${params.toString()}`);
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: page === pagination.page ? '#C86A50' : '#FFFFFF',
                  color: page === pagination.page ? '#F7F5F2' : '#2E3A4B',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                }}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', backgroundColor: '#F7F5F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#6B7280' }}>
          Loading...
        </div>
      </div>
    }>
      <ListingsContent />
    </Suspense>
  );
}
