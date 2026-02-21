import { z } from 'zod';

// Room listing creation schema
export const createListingSchema = z.object({
  title: z
    .string()
    .min(10, 'Title must be at least 10 characters')
    .max(100, 'Title must be less than 100 characters'),
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters')
    .max(2000, 'Description must be less than 2000 characters'),
  monthlyRent: z
    .number()
    .min(300, 'Monthly rent must be at least $300')
    .max(10000, 'Monthly rent must be less than $10,000'),
  neighborhood: z
    .string()
    .min(2, 'Neighborhood is required')
    .max(100, 'Neighborhood name too long'),
  address: z.string().max(500).optional(),
  roomType: z.enum(['private_room', 'shared_room'], {
    errorMap: () => ({ message: 'Please select a valid room type' }),
  }),
  availableFrom: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'Available from date must be today or in the future'),
  leaseEndDate: z.string().optional(),
  amenities: z.array(z.string()).optional(),
  photos: z.array(z.string().url()).optional(),
});

// Listing update schema (all fields optional except id)
export const updateListingSchema = createListingSchema.partial();

// Listing search/filter schema
export const listingSearchSchema = z.object({
  minRent: z.number().min(0).optional(),
  maxRent: z.number().max(10000).optional(),
  neighborhoods: z.array(z.string()).optional(),
  roomType: z.enum(['private_room', 'shared_room']).optional(),
  availableFrom: z.string().optional(),
  amenities: z.array(z.string()).optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(50).default(20),
  sortBy: z.enum(['newest', 'price_low', 'price_high', 'available_soon']).default('newest'),
});

export type CreateListingInput = z.infer<typeof createListingSchema>;
export type UpdateListingInput = z.infer<typeof updateListingSchema>;
export type ListingSearchInput = z.infer<typeof listingSearchSchema>;
