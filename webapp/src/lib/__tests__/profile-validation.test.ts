import {
  basicInfoSchema,
  lifestylePreferencesSchema,
  housingPreferencesSchema,
} from '../profile-validation'

describe('Profile Validation Schemas', () => {
  describe('basicInfoSchema', () => {
    it('should validate correct basic info', () => {
      const validData = {
        fullName: 'John Doe',
        university: 'NYU',
        major: 'Computer Science',
        academicYear: 'junior',
        userType: 'seeker',
      }
      const result = basicInfoSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid user type', () => {
      const invalidData = {
        fullName: 'John Doe',
        university: 'NYU',
        userType: 'invalid',
      }
      const result = basicInfoSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should accept optional fields as undefined', () => {
      const validData = {
        fullName: 'John Doe',
        university: 'NYU',
        userType: 'provider',
      }
      const result = basicInfoSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
  })

  describe('lifestylePreferencesSchema', () => {
    it('should validate correct lifestyle preferences', () => {
      const validData = {
        cleanliness: 3,
        socialHabits: 4,
        noiseLevel: 2,
        sleepSchedule: 'moderate',
        guestsFrequency: 'sometimes',
        petsComfortable: true,
        smokingComfortable: false,
        studyHabits: {
          location: 'library',
          hoursPerDay: 4,
          needsQuiet: true,
        },
        lifestyleTags: ['Fitness', 'Reading'],
      }
      const result = lifestylePreferencesSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject cleanliness out of range', () => {
      const invalidData = {
        cleanliness: 6,
        socialHabits: 3,
        noiseLevel: 3,
        sleepSchedule: 'moderate',
        guestsFrequency: 'sometimes',
        petsComfortable: true,
        smokingComfortable: false,
        studyHabits: {},
        lifestyleTags: [],
      }
      const result = lifestylePreferencesSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject invalid sleep schedule', () => {
      const invalidData = {
        cleanliness: 3,
        socialHabits: 3,
        noiseLevel: 3,
        sleepSchedule: 'invalid',
        guestsFrequency: 'sometimes',
        petsComfortable: true,
        smokingComfortable: false,
        studyHabits: {},
        lifestyleTags: [],
      }
      const result = lifestylePreferencesSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('housingPreferencesSchema', () => {
    it('should validate correct housing preferences', () => {
      const validData = {
        maxBudget: 1500,
        preferredNeighborhoods: ['East Village', 'Williamsburg'],
        moveInDate: '2025-09-01',
        leaseDuration: '12_months',
        housingType: 'shared_room',
        amenitiesRequired: ['wifi', 'laundry'],
      }
      const result = housingPreferencesSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject negative budget', () => {
      const invalidData = {
        maxBudget: -100,
        preferredNeighborhoods: ['East Village'],
        moveInDate: '2025-09-01',
        leaseDuration: '12_months',
        housingType: 'shared_room',
        amenitiesRequired: [],
      }
      const result = housingPreferencesSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should accept optional move-in date', () => {
      const validData = {
        maxBudget: 1500,
        preferredNeighborhoods: ['East Village'],
        housingType: 'shared_room',
      }
      const result = housingPreferencesSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid housing type', () => {
      const invalidData = {
        maxBudget: 1500,
        preferredNeighborhoods: ['East Village'],
        moveInDate: '2025-09-01',
        leaseDuration: '12_months',
        housingType: 'invalid_type',
        amenitiesRequired: [],
      }
      const result = housingPreferencesSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})
