import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display landing page', async ({ page }) => {
    await expect(page).toHaveTitle(/Kommon/)
    await expect(page.getByRole('heading', { name: /Find Your Safe Space/i })).toBeVisible()
  })

  test('should navigate to signup page', async ({ page }) => {
    await page.getByRole('link', { name: /Sign Up/i }).click()
    await expect(page).toHaveURL(/\/signup/)
    await expect(page.getByRole('heading', { name: /Create Account/i })).toBeVisible()
  })

  test('should show validation errors for invalid signup', async ({ page }) => {
    await page.goto('/signup')
    
    // Try to submit empty form
    await page.getByRole('button', { name: /Sign Up/i }).click()
    
    // Should show validation errors
    await expect(page.getByText(/email/i)).toBeVisible()
  })

  test('should reject non-.edu email', async ({ page }) => {
    await page.goto('/signup')
    
    await page.getByLabel(/email/i).fill('test@gmail.com')
    await page.getByLabel(/password/i).fill('SecurePass123!')
    await page.getByRole('button', { name: /Sign Up/i }).click()
    
    // Should show .edu requirement error
    await expect(page.getByText(/.edu/i)).toBeVisible()
  })

  test('should navigate to login page', async ({ page }) => {
    await page.getByRole('link', { name: /Login/i }).first().click()
    await expect(page).toHaveURL(/\/login/)
    await expect(page.getByRole('heading', { name: /Welcome Back/i })).toBeVisible()
  })

  test('should show error for invalid login credentials', async ({ page }) => {
    await page.goto('/login')
    
    await page.getByLabel(/email/i).fill('nonexistent@nyu.edu')
    await page.getByLabel(/password/i).fill('WrongPassword123!')
    await page.getByRole('button', { name: /Login/i }).click()
    
    // Should show error message
    await expect(page.getByText(/invalid/i)).toBeVisible()
  })
})

test.describe('Complete User Journey', () => {
  const testEmail = `test-${Date.now()}@nyu.edu`
  const testPassword = 'SecurePass123!'

  test('should complete full signup and profile creation flow', async ({ page }) => {
    // 1. Navigate to signup
    await page.goto('/signup')
    
    // 2. Fill signup form
    await page.getByLabel(/email/i).fill(testEmail)
    await page.getByLabel(/password/i).fill(testPassword)
    await page.getByRole('button', { name: /Sign Up/i }).click()
    
    // 3. Should show verification message
    await expect(page.getByText(/verification/i)).toBeVisible()
    
    // 4. In dev mode, use quick verify
    if (await page.getByRole('button', { name: /Quick Verify/i }).isVisible()) {
      await page.getByRole('button', { name: /Quick Verify/i }).click()
      await expect(page.getByText(/verified/i)).toBeVisible()
    }
    
    // 5. Login
    await page.goto('/login')
    await page.getByLabel(/email/i).fill(testEmail)
    await page.getByLabel(/password/i).fill(testPassword)
    await page.getByRole('button', { name: /Login/i }).click()
    
    // 6. Should redirect to profile creation
    await expect(page).toHaveURL(/\/profile\/create/)
    
    // 7. Fill basic info (Step 1)
    await page.getByLabel(/full name/i).fill('Test User')
    await page.getByLabel(/university/i).fill('NYU')
    await page.getByLabel(/major/i).fill('Computer Science')
    await page.getByRole('button', { name: /Looking for Housing/i }).click()
    await page.getByRole('button', { name: /Continue/i }).click()
    
    // 8. Fill lifestyle preferences (Step 2)
    await expect(page.getByText(/Lifestyle/i)).toBeVisible()
    await page.getByRole('button', { name: /Continue/i }).click()
    
    // 9. Fill housing preferences (Step 3)
    await expect(page.getByText(/Housing/i)).toBeVisible()
    await page.getByLabel(/budget/i).fill('1500')
    await page.getByLabel(/move-in date/i).fill('2025-09-01')
    await page.getByRole('button', { name: /Continue/i }).click()
    
    // 10. Should redirect to dashboard
    await expect(page).toHaveURL(/\/dashboard/)
    await expect(page.getByText(/Welcome back, Test User/i)).toBeVisible()
  })
})
