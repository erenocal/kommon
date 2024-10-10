import React, { useState } from 'react';
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import Checkbox from "@/components/ui/checkbox";
import RangeSlider from "@/components/ui/RangeSlider";

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  ageRange: [number, number];
  gender: string[];
  pets: string[];
  minRooms: number;
  minBathrooms: number;
  laundry: string[];
  availabilityStart: string;
  availabilityEnd: string;
  maxPrice: number;
  location: string;
}

const genderOptions = ['Female', 'Male', 'Non-binary'];
const petOptions = ['Cats', 'Dogs', 'Small Pets', 'Birds', 'Fish', 'Reptiles'];
const laundryOptions = ['Washer', 'Dryer'];

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    ageRange: [0, 100],
    gender: [],
    pets: [],
    minRooms: 1,
    minBathrooms: 1,
    laundry: [],
    availabilityStart: '',
    availabilityEnd: '',
    maxPrice: 10000,
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: checked
        ? [...prev[name as keyof SearchFilters] as string[], value]
        : (prev[name as keyof SearchFilters] as string[]).filter(item => item !== value)
    }));
  };

  const handleAgeRangeChange = (range: [number, number]) => {
    setFilters(prev => ({ ...prev, ageRange: range }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="ageRange">Age Range</Label>
        <RangeSlider
          min={0}
          max={100}
          onChange={handleAgeRangeChange}
          initialValues={filters.ageRange}
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
                checked={filters.gender.includes(option)}
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
                checked={filters.pets.includes(option)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`pets-${option}`} className="ml-2">{option}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="minRooms">Minimum Rooms</Label>
        <Input
          type="number"
          id="minRooms"
          name="minRooms"
          value={filters.minRooms}
          onChange={handleChange}
          min="1"
        />
      </div>
      <div>
        <Label htmlFor="minBathrooms">Minimum Bathrooms</Label>
        <Input
          type="number"
          id="minBathrooms"
          name="minBathrooms"
          value={filters.minBathrooms}
          onChange={handleChange}
          min="1"
          step="0.5"
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
                checked={filters.laundry.includes(option)}
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
          value={filters.availabilityStart}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="availabilityEnd">Availability End</Label>
        <Input
          type="date"
          id="availabilityEnd"
          name="availabilityEnd"
          value={filters.availabilityEnd}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="maxPrice">Maximum Price</Label>
        <Input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          type="text"
          id="location"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Enter a location"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}