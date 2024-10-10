import React from 'react';
import Button from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';

interface ListingCardProps {
  listing: {
    id: number;
    title: string;
    price: number;
    location: string;
    description?: string;
    imageUrl?: string;
    ageRange: [number, number]; // Remove the optional '?' and change type to [number, number]
    gender?: string[];
    pets?: string[];
    roomsAvailable?: number;
    bathrooms?: number;
    laundry?: string[];
    availabilityStart?: string;
    availabilityEnd?: string;
  };
  onDelete: () => void;
}

export default function ListingCard({ listing, onDelete }: ListingCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{listing.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {listing.imageUrl && (
          <div className="relative w-full h-48 mb-4">
            <Image 
              src={listing.imageUrl} 
              alt={listing.title} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        )}
        <p className="font-bold">${listing.price} / month</p>
        <p><strong>Location:</strong> {listing.location}</p>
        <p><strong>Age Range:</strong> {listing.ageRange[0]}-{listing.ageRange[1]}</p>
        {listing.gender && <p><strong>Gender:</strong> {listing.gender.join(', ')}</p>}
        {listing.pets && <p><strong>Pets:</strong> {listing.pets.join(', ')}</p>}
        {listing.roomsAvailable && <p><strong>Rooms Available:</strong> {listing.roomsAvailable}</p>}
        {listing.bathrooms && <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>}
        {listing.description && (
          <p className="mt-2 text-sm text-gray-600"><strong>Description:</strong> {listing.description.slice(0, 100)}...</p>
        )}
        {listing.laundry && <p><strong>Laundry:</strong> {listing.laundry.join(', ')}</p>}
        {listing.availabilityStart && listing.availabilityEnd && (
          <p><strong>Availability:</strong> {formatDate(listing.availabilityStart)} - {formatDate(listing.availabilityEnd)}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/listing/${listing.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
        <div className="space-x-2">
          <Link href={`/edit-listing/${listing.id}`}>
            <Button variant="secondary">Edit</Button>
          </Link>
          <Button variant="outline" onClick={onDelete}>Delete</Button>
        </div>
      </CardFooter>
    </Card>
  );
}