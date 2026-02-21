'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Home, CheckCircle } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  description: string;
  monthlyRent: number;
  neighborhood: string;
  address: string | null;
  roomType: string;
  availableFrom: string;
  leaseEndDate: string | null;
  amenities: string[];
  photos: string[];
  createdAt: string;
  profile: {
    id: string;
    fullName: string;
    university: string;
    major: string | null;
    academicYear: string | null;
    bio: string | null;
    profilePhotoUrl: string | null;
  };
}

export default function ListingDetailPage() {
  const params = useParams();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchListing();
  }, [params.id]);

  const fetchListing = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/listings/${params.id}`, {
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setListing(data);
      } else {
        setError('Listing not found');
      }
    } catch (err) {
      setError('Failed to load listing');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatRoomType = (type: string) => {
    return type === 'private_room' ? 'Private Room' : 'Shared Room';
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F7F5F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#6B7280' }}>
          Loading listing...
        </div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F7F5F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Home size={48} style={{ margin: '0 auto 16px', color: '#9CA3AF' }} />
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '8px' }}>
            {error || 'Listing not found'}
          </h2>
          <Link href="/listings" style={{ color: '#C86A50', textDecoration: 'none', fontWeight: '600' }}>
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F5F2' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '16px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <Link href="/listings" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#2E3A4B', textDecoration: 'none', fontWeight: '600' }}>
            <ArrowLeft size={20} />
            Back to Listings
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
          {/* Main Content */}
          <div style={{ gridColumn: '1' }}>
            {/* Photos */}
            <div style={{ marginBottom: '32px' }}>
              {listing.photos && listing.photos.length > 0 ? (
                <div style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#E5E7EB' }}>
                  <img
                    src={listing.photos[0]}
                    alt={listing.title}
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <div style={{ height: '400px', backgroundColor: '#E5E7EB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Home size={64} style={{ color: '#9CA3AF' }} />
                </div>
              )}
            </div>

            {/* Title and Price */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#2E3A4B', fontFamily: 'Nunito, sans-serif', flex: 1 }}>
                  {listing.title}
                </h1>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#C86A50', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                  ${listing.monthlyRent}/mo
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: '#6B7280' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={18} />
                  <span>{listing.neighborhood}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Home size={18} />
                  <span>{formatRoomType(listing.roomType)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={18} />
                  <span>Available {formatDate(listing.availableFrom)}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '16px', fontFamily: 'Nunito, sans-serif' }}>
                About this room
              </h2>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6', fontFamily: 'Lora, serif', whiteSpace: 'pre-wrap' }}>
                {listing.description}
              </p>
            </div>

            {/* Amenities */}
            {listing.amenities && listing.amenities.length > 0 && (
              <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '16px', fontFamily: 'Nunito, sans-serif' }}>
                  Amenities
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                  {listing.amenities.map((amenity) => (
                    <div key={amenity} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={18} style={{ color: '#10B981' }} />
                      <span style={{ fontSize: '14px', color: '#374151' }}>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Details */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '16px', fontFamily: 'Nunito, sans-serif' }}>
                Details
              </h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {listing.address && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #E5E7EB' }}>
                    <span style={{ color: '#6B7280' }}>Address</span>
                    <span style={{ fontWeight: '600', color: '#2E3A4B' }}>{listing.address}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #E5E7EB' }}>
                  <span style={{ color: '#6B7280' }}>Room Type</span>
                  <span style={{ fontWeight: '600', color: '#2E3A4B' }}>{formatRoomType(listing.roomType)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #E5E7EB' }}>
                  <span style={{ color: '#6B7280' }}>Available From</span>
                  <span style={{ fontWeight: '600', color: '#2E3A4B' }}>{formatDate(listing.availableFrom)}</span>
                </div>
                {listing.leaseEndDate && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #E5E7EB' }}>
                    <span style={{ color: '#6B7280' }}>Lease Ends</span>
                    <span style={{ fontWeight: '600', color: '#2E3A4B' }}>{formatDate(listing.leaseEndDate)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#6B7280' }}>Listed</span>
                  <span style={{ fontWeight: '600', color: '#2E3A4B' }}>{formatDate(listing.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Provider Card */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E7EB', position: 'sticky', top: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '16px', fontFamily: 'Nunito, sans-serif' }}>
                Listed by
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#E5E7EB', overflow: 'hidden', flexShrink: 0 }}>
                  {listing.profile.profilePhotoUrl ? (
                    <img
                      src={listing.profile.profilePhotoUrl}
                      alt={listing.profile.fullName}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', color: '#6B7280' }}>
                      {listing.profile.fullName.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '4px' }}>
                    {listing.profile.fullName}
                  </div>
                  <div style={{ fontSize: '14px', color: '#6B7280' }}>
                    {listing.profile.university}
                  </div>
                  {listing.profile.major && (
                    <div style={{ fontSize: '14px', color: '#6B7280' }}>
                      {listing.profile.major}
                    </div>
                  )}
                </div>
              </div>

              {listing.profile.bio && (
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5', marginBottom: '16px', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
                  {listing.profile.bio}
                </p>
              )}

              <button
                onClick={() => alert('Messaging feature coming in Phase 2!')}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#C86A50',
                  color: '#F7F5F2',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '8px',
                }}
              >
                Contact Provider
              </button>

              <Link
                href={`/profile/${listing.profile.id}`}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#FFFFFF',
                  color: '#C86A50',
                  border: '1px solid #C86A50',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
