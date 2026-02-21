'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const NYC_NEIGHBORHOODS = [
  'Upper West Side', 'Upper East Side', 'Midtown', 'Chelsea', 'Greenwich Village',
  'East Village', 'Lower East Side', 'SoHo', 'Tribeca', 'Financial District',
  'Brooklyn Heights', 'Williamsburg', 'Park Slope', 'Astoria', 'Long Island City',
  'Harlem', 'Washington Heights', 'Inwood', 'Bronx', 'Queens'
];

const AMENITIES = [
  'Laundry in building', 'Laundry in unit', 'Dishwasher', 'Air conditioning',
  'Heating', 'Gym', 'Doorman', 'Elevator', 'Parking', 'Balcony',
  'Rooftop access', 'Pet friendly', 'WiFi included', 'Utilities included'
];

export default function CreateListingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    monthlyRent: '',
    neighborhood: '',
    address: '',
    roomType: 'private_room',
    availableFrom: '',
    leaseEndDate: '',
    amenities: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          ...formData,
          monthlyRent: parseInt(formData.monthlyRent),
        }),
      });

      if (response.ok) {
        const listing = await response.json();
        router.push(`/listings/${listing.id}`);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create listing');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

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

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2E3A4B', marginBottom: '8px', fontFamily: 'Nunito, sans-serif' }}>
            Create Room Listing
          </h1>
          <p style={{ fontSize: '18px', color: '#6B7280', fontFamily: 'Lora, serif' }}>
            Share your available room with verified students
          </p>
        </div>

        {error && (
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444', color: '#991B1B', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
          {/* Title */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Listing Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Cozy room in shared 3BR apartment near Columbia"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your room, apartment, and neighborhood..."
              rows={6}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
                fontFamily: 'inherit',
              }}
            />
            <div style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>
              Minimum 50 characters
            </div>
          </div>

          {/* Monthly Rent */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Monthly Rent *
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280', fontSize: '16px' }}>
                $
              </span>
              <input
                type="number"
                required
                min="300"
                max="10000"
                value={formData.monthlyRent}
                onChange={(e) => setFormData({ ...formData, monthlyRent: e.target.value })}
                placeholder="1200"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 28px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  fontSize: '16px',
                }}
              />
            </div>
          </div>

          {/* Neighborhood */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Neighborhood *
            </label>
            <select
              required
              value={formData.neighborhood}
              onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            >
              <option value="">Select neighborhood</option>
              {NYC_NEIGHBORHOODS.map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Address (Optional) */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Address (Optional)
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="123 Main St, Apt 4B"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
          </div>

          {/* Room Type */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Room Type *
            </label>
            <div style={{ display: 'flex', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="roomType"
                  value="private_room"
                  checked={formData.roomType === 'private_room'}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                />
                <span>Private Room</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="roomType"
                  value="shared_room"
                  checked={formData.roomType === 'shared_room'}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                />
                <span>Shared Room</span>
              </label>
            </div>
          </div>

          {/* Available From */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Available From *
            </label>
            <input
              type="date"
              required
              value={formData.availableFrom}
              onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
          </div>

          {/* Lease End Date (Optional) */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
              Lease End Date (Optional)
            </label>
            <input
              type="date"
              value={formData.leaseEndDate}
              onChange={(e) => setFormData({ ...formData, leaseEndDate: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
          </div>

          {/* Amenities */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600', color: '#374151' }}>
              Amenities
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
              {AMENITIES.map(amenity => (
                <label
                  key={amenity}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: formData.amenities.includes(amenity) ? '#FEF3C7' : '#FFFFFF',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                  />
                  <span style={{ fontSize: '14px' }}>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: loading ? '#9CA3AF' : '#C86A50',
              color: '#F7F5F2',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Creating Listing...' : 'Create Listing'}
          </button>
        </form>
      </div>
    </div>
  );
}
