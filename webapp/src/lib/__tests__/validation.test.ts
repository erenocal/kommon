import { signUpSchema, loginSchema } from '../validation'

describe('Validation Schemas', () => {
  describe('signUpSchema', () => {
    it('should validate correct signup data', () => {
      const validData = {
        email: 'test@nyu.edu',
        password: 'SecurePass123!',
      }
      const result = signUpSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject non-.edu email', () => {
      const invalidData = {
        email: 'test@gmail.com',
        password: 'SecurePass123!',
      }
      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('.edu')
      }
    })

    it('should reject weak password', () => {
      const invalidData = {
        email: 'test@nyu.edu',
        password: 'weak',
      }
      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('8 characters')
      }
    })

    it('should reject password without uppercase', () => {
      const invalidData = {
        email: 'test@nyu.edu',
        password: 'securepass123!',
      }
      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject password without lowercase', () => {
      const invalidData = {
        email: 'test@nyu.edu',
        password: 'SECUREPASS123!',
      }
      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject password without number', () => {
      const invalidData = {
        email: 'test@nyu.edu',
        password: 'SecurePass!',
      }
      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('loginSchema', () => {
    it('should validate correct login data', () => {
      const validData = {
        email: 'test@nyu.edu',
        password: 'SecurePass123!',
      }
      const result = loginSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid email format', () => {
      const invalidData = {
        email: 'not-an-email',
        password: 'SecurePass123!',
      }
      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject empty password', () => {
      const invalidData = {
        email: 'test@nyu.edu',
        password: '',
      }
      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})
