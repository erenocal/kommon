'use client';

import React, { useEffect, useState } from 'react';
import Button from "@/components/ui/button";
import ListingCard from "@/components/ListingCard";
import Link from 'next/link';
import SearchForm, { SearchFilters } from "@/components/SearchForm";

interface Listing {
  id: number;
  title: string;
  price: number;
  location: string;
  description?: string;
  imageUrl?: string;
  ageRange: [number, number];
  gender?: string[];
  pets?: string[];
  roomsAvailable?: number;
  bathrooms?: number;
  laundry?: string[];
  availabilityStart?: string;
  availabilityEnd?: string;
}

export default function HomePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('listings') || '[]');
    setListings(storedListings);
    setFilteredListings(storedListings);
    setIsLoading(false);
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this listing? This action cannot be undone.")) {
      const updatedListings = listings.filter(listing => listing.id !== id);
      setListings(updatedListings);
      setFilteredListings(updatedListings);
      localStorage.setItem('listings', JSON.stringify(updatedListings));
    }
  };

  const handleSearch = (filters: SearchFilters) => {
    const filtered = listings.filter(listing => {
      const ageRangeMatch = listing.ageRange[0] >= filters.ageRange[0] && listing.ageRange[1] <= filters.ageRange[1];
      const genderMatch = filters.gender.length === 0 || (listing.gender && listing.gender.some(g => filters.gender.includes(g)));
      const petsMatch = filters.pets.length === 0 || (listing.pets && listing.pets.some(p => filters.pets.includes(p)));
      const roomsMatch = listing.roomsAvailable ? listing.roomsAvailable >= filters.minRooms : true;
      const bathroomsMatch = listing.bathrooms ? listing.bathrooms >= filters.minBathrooms : true;
      const laundryMatch = filters.laundry.length === 0 || (listing.laundry && listing.laundry.some(l => filters.laundry.includes(l)));
      const availabilityStartMatch = !filters.availabilityStart || (listing.availabilityStart && new Date(listing.availabilityStart) <= new Date(filters.availabilityStart));
      const availabilityEndMatch = !filters.availabilityEnd || (listing.availabilityEnd && new Date(listing.availabilityEnd) >= new Date(filters.availabilityEnd));
      const priceMatch = listing.price <= filters.maxPrice;
      const locationMatch = !filters.location || listing.location.toLowerCase().includes(filters.location.toLowerCase());

      return ageRangeMatch && genderMatch && petsMatch && roomsMatch && bathroomsMatch && laundryMatch && 
             availabilityStartMatch && availabilityEndMatch && priceMatch && locationMatch;
    });

    setFilteredListings(filtered);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Find Your Perfect Stay</h1>
        <Link href="/create-listing" passHref>
          <Button as="a">Create Listing</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <SearchForm onSearch={handleSearch} />
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredListings.map((listing) => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                onDelete={() => handleDelete(listing.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}