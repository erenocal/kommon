import { z } from 'zod'

// Step 1: Basic Info
export const basicInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  university: z.string().min(2, 'University is required'),
  major: z.string().optional(),
  academicYear: z.enum(['freshman', 'sophomore', 'junior', 'senior', 'graduate', 'phd']).optional(),
  userType: z.enum(['seeker', 'provider'], {
    required_error: 'Please select if you are looking for or offering housing',
  }),
})

// Step 2: Lifestyle Preferences
export const lifestylePreferencesSchema = z.object({
  cleanliness: z.number().min(1).max(5),
  socialHabits: z.number().min(1).max(5),
  noiseLevel: z.number().min(1).max(5),
  sleepSchedule: z.enum(['early_bird', 'night_owl', 'moderate']),
  guestsFrequency: z.enum(['never', 'rarely', 'sometimes', 'often']),
  petsComfortable: z.boolean(),
  smokingComfortable: z.boolean(),
  studyHabits: z.object({
    location: z.enum(['home', 'library', 'both']),
    hoursPerDay: z.number().min(0).max(24),
    needsQuiet: z.boolean(),
  }).optional(),
  lifestyleTags: z.array(z.string()).optional(),
})

// Step 3: Housing Preferences
export const housingPreferencesSchema = z.object({
  maxBudget: z.number().min(0, 'Budget must be a positive number'),
  preferredNeighborhoods: z.array(z.string()).min(1, 'Select at least one neighborhood'),
  moveInDate: z.string().optional(),
  leaseDuration: z.enum(['3_months', '6_months', '12_months', 'flexible']).optional(),
  housingType: z.enum(['private_room', 'shared_room', 'studio', 'apartment']),
  amenitiesRequired: z.array(z.string()).optional(),
})

export type BasicInfoInput = z.infer<typeof basicInfoSchema>
export type LifestylePreferencesInput = z.infer<typeof lifestylePreferencesSchema>
export type HousingPreferencesInput = z.infer<typeof housingPreferencesSchema>
