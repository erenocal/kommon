'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Checkbox from "@/components/ui/checkbox";
import RangeSlider from "@/components/ui/RangeSlider";

const petOptions = ['Cats', 'Dogs', 'Small Pets', 'Birds', 'Fish', 'Reptiles'];
const genderOptions = ['Female', 'Male', 'Non-binary'];
const laundryOptions = ['Washer', 'Dryer'];

export default function CreateListingPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [listing, setListing] = useState({
    title: '',
    price: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    description: '',
    image: null as File | null,
    ageRange: [18, 100] as [number, number],
    gender: [] as string[],
    pets: [] as string[],
    roomsAvailable: '',
    bathrooms: '',
    laundry: [] as string[],
    availabilityStart: '',
    availabilityEnd: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setListing(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setListing(prev => ({ ...prev, [name]: selectedValues }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setListing(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setListing(prev => ({
      ...prev,
      [name]: checked
        ? [...(prev[name as keyof typeof prev] as string[]), value]
        : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleAgeRangeChange = (range: [number, number]) => {
    setListing(prev => ({ ...prev, ageRange: range }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newListing = {
      ...listing,
      id: Date.now(),
      price: parseFloat(listing.price),
      location: `${listing.street}, ${listing.city}, ${listing.state} ${listing.zipCode}`,
      imageUrl: imagePreview,
      roomsAvailable: parseInt(listing.roomsAvailable),
      bathrooms: parseFloat(listing.bathrooms),
      ageRange: listing.ageRange, // Make sure to include this
      laundry: listing.laundry,
      availabilityStart: formatDate(listing.availabilityStart),
      availabilityEnd: formatDate(listing.availabilityEnd),
    };
    
    const existingListings = JSON.parse(localStorage.getItem('listings') || '[]');
    localStorage.setItem('listings', JSON.stringify([...existingListings, newListing]));
    
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={listing.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Price per month</Label>
          <Input
            type="number"
            id="price"
            name="price"
            value={listing.price}
            onChange={handleChange}
            step="10"
            min="0"
            required
          />
        </div>
        <div>
          <Label htmlFor="street">Street Address</Label>
          <Input
            type="text"
            id="street"
            name="street"
            value={listing.street}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            id="city"
            name="city"
            value={listing.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            type="text"
            id="state"
            name="state"
            value={listing.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input
            type="text"
            id="zipCode"
            name="zipCode"
            value={listing.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            name="description"
            value={listing.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            rows={4}
            required
          />
        </div>
        <div>
          <Label htmlFor="ageRange"><strong>Age Range</strong></Label>
          <RangeSlider
            min={0}
            max={100}
            onChange={handleAgeRangeChange}
            initialValues={listing.ageRange}
          />
        </div>
        <div>
          <Label>Gender</Label>
          <div className="space-y-2">
            {genderOptions.map(option => (
              <div key={option} className="flex items-center">
                <Checkbox
                  id={`gender-${option}`}
                  name="gender"
                  value={option}
                  checked={listing.gender.includes(option)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`gender-${option}`} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label>Pets</Label>
          <div className="space-y-2">
            {petOptions.map(option => (
              <div key={option} className="flex items-center">
                <Checkbox
                  id={`pets-${option}`}
                  name="pets"
                  value={option}
                  checked={listing.pets.includes(option)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`pets-${option}`} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="roomsAvailable">Number of Rooms Available</Label>
          <Input
            type="number"
            id="roomsAvailable"
            name="roomsAvailable"
            value={listing.roomsAvailable}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div>
          <Label htmlFor="bathrooms">Number of Bathrooms</Label>
          <Input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={listing.bathrooms}
            onChange={handleChange}
            min="1"
            step="0.5"
            required
          />
        </div>
        <div>
          <Label>Laundry</Label>
          <div className="space-y-2">
            {laundryOptions.map(option => (
              <div key={option} className="flex items-center">
                <Checkbox
                  id={`laundry-${option}`}
                  name="laundry"
                  value={option}
                  checked={listing.laundry.includes(option)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`laundry-${option}`} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="availabilityStart">Availability Start</Label>
          <Input
            type="date"
            id="availabilityStart"
            name="availabilityStart"
            value={listing.availabilityStart}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="availabilityEnd">Availability End</Label>
          <Input
            type="date"
            id="availabilityEnd"
            name="availabilityEnd"
            value={listing.availabilityEnd}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="image">Upload Image</Label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
          />
          <Button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full"
          >
            Choose Image
          </Button>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-2 max-w-full h-auto" />
          )}
        </div>
        <Button type="submit" className="w-full">Create Listing</Button>
      </form>
    </div>
  );
}