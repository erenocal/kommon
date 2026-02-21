import { test, expect } from '@playwright/test'

test.describe('Profile Management', () => {
  test.beforeEach(async ({ page }) => {
    // Assume user is logged in (you'll need to implement login helper)
    await page.goto('/dashboard')
  })

  test('should display dashboard with profile info', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Dashboard/i })).toBeVisible()
    await expect(page.getByText(/Welcome back/i)).toBeVisible()
  })

  test('should navigate to profile view', async ({ page }) => {
    await page.getByRole('button', { name: /View Profile/i }).click()
    await expect(page).toHaveURL(/\/profile\/view/)
    await expect(page.getByText(/Your Profile/i)).toBeVisible()
  })

  test('should display all profile sections', async ({ page }) => {
    await page.goto('/profile/view')
    
    // Check for all profile sections
    await expect(page.getByText(/Basic Information/i)).toBeVisible()
    await expect(page.getByText(/Lifestyle Preferences/i)).toBeVisible()
    await expect(page.getByText(/Housing Preferences/i)).toBeVisible()
  })

  test('should navigate back to dashboard', async ({ page }) => {
    await page.goto('/profile/view')
    await page.getByRole('button', { name: /Back to Dashboard/i }).click()
    await expect(page).toHaveURL(/\/dashboard/)
  })

  test('should logout successfully', async ({ page }) => {
    await page.getByRole('button', { name: /Logout/i }).click()
    await expect(page).toHaveURL('/')
  })
})

test.describe('Profile Creation Steps', () => {
  test('should validate required fields in basic info', async ({ page }) => {
    await page.goto('/profile/create')
    
    // Try to continue without filling required fields
    await page.getByRole('button', { name: /Continue/i }).click()
    
    // Should not proceed (button should be disabled or show errors)
    await expect(page).toHaveURL(/\/profile\/create/)
  })

  test('should allow navigation between steps', async ({ page }) => {
    await page.goto('/profile/create')
    
    // Fill basic info and proceed
    await page.getByLabel(/full name/i).fill('Test User')
    await page.getByLabel(/university/i).fill('NYU')
    await page.getByRole('button', { name: /Looking for Housing/i }).click()
    await page.getByRole('button', { name: /Continue/i }).click()
    
    // Should be on step 2
    await expect(page.getByText(/Lifestyle/i)).toBeVisible()
    
    // Go back
    await page.getByRole('button', { name: /Back/i }).click()
    
    // Should be back on step 1
    await expect(page.getByLabel(/full name/i)).toHaveValue('Test User')
  })
})
