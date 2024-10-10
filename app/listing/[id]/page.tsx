'use client';

import React, { useState, useEffect } from 'react';
import Button from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Checkbox from "@/components/ui/checkbox";

const laundryOptions = ['Washer', 'Dryer'];

export default function ListingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [listing, setListing] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    location: "",
    imageUrl: "",
    ageRange: [18, 100] as [number, number],
    gender: [] as string[],
    pets: [] as string[],
    roomsAvailable: 0,
    bathrooms: 0,
    laundry: [] as string[],
    availabilityStart: '',
    availabilityEnd: '',
  });

  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('listings') || '[]');
    const currentListing = storedListings.find((l: any) => l.id === parseInt(params.id));
    if (currentListing) {
      setListing(currentListing);
    } else {
      router.push('/');
    }
  }, [params.id, router]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this listing? This action cannot be undone.")) {
      const storedListings = JSON.parse(localStorage.getItem('listings') || '[]');
      const updatedListings = storedListings.filter((l: any) => l.id !== listing.id);
      localStorage.setItem('listings', JSON.stringify(updatedListings));
      router.push('/');
    }
  };

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(listing.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setListing(prev => ({
      ...prev,
      [name]: checked
        ? [...(prev[name as keyof typeof prev] as string[]), value]
        : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
          {listing.imageUrl && (
            <div className="relative w-full h-64 mb-4">
              <Image 
                src={listing.imageUrl} 
                alt={listing.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
            </div>
          )}
          <p className="mb-6 text-gray-600">{listing.description}</p>
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Age Range:</strong> {listing.ageRange[0]}-{listing.ageRange[1]}</p>
              <p><strong>Gender:</strong> {listing.gender ? listing.gender.join(', ') : 'Not specified'}</p>
              <p><strong>Pets:</strong> {listing.pets ? listing.pets.join(', ') : 'Not specified'}</p>
              <p><strong>Rooms Available:</strong> {listing.roomsAvailable}</p>
              <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>
              <p><strong>Laundry:</strong> {listing.laundry.join(', ')}</p>
              <p><strong>Availability:</strong> {formatDate(listing.availabilityStart)} - {formatDate(listing.availabilityEnd)}</p>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600"><strong>Address:</strong> {listing.location}</p>
              <div className="relative w-full h-64">
                <iframe 
                  src={mapUrl}
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  style={{border:0}} 
                  allowFullScreen 
                  aria-hidden="false" 
                  tabIndex={0}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle><strong>${listing.price} / month</strong></CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={`/messages?listing=${listing.id}`}>
                <Button className="w-full mb-2">Contact Lister</Button>
              </Link>
              <Link href={`/edit-listing/${listing.id}`}>
                <Button variant="secondary" className="w-full mb-2">Edit Listing</Button>
              </Link>
              <Button variant="outline" className="w-full" onClick={handleDelete}>Delete Listing</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}