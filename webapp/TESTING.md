# Testing Guide for Kommon

This document outlines the testing strategy and how to run tests for the Kommon platform.

## Testing Philosophy

We follow a test-driven development approach with a testing pyramid:
- **70% Unit Tests**: Fast, isolated tests for functions and components
- **20% Integration Tests**: API routes and component integration
- **10% E2E Tests**: Critical user journeys

## Test Stack

- **Jest**: Unit and integration testing framework
- **React Testing Library**: Component testing
- **Playwright**: End-to-end testing
- **Coverage Target**: 70% minimum across all metrics

## Running Tests

### Unit & Component Tests

```bash
# Run all unit tests
pnpm test

# Run tests in watch mode (for development)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

### E2E Tests

```bash
# Run all E2E tests (headless)
pnpm test:e2e

# Run E2E tests with UI (interactive)
pnpm test:e2e:ui

# Run E2E tests in headed mode (see browser)
pnpm test:e2e:headed
```

### Run All Tests

```bash
# Run both unit and E2E tests
pnpm test:all
```

## Test Structure

```
webapp/
├── src/
│   ├── lib/__tests__/              # Unit tests for utilities
│   ├── components/
│   │   └── ui/__tests__/           # Component tests
│   └── app/
│       └── api/__tests__/          # API route tests
└── e2e/                            # End-to-end tests
    ├── auth.spec.ts
    └── profile.spec.ts
```

## Writing Tests

### Unit Tests

Test individual functions and utilities:

```typescript
// src/lib/__tests__/validation.test.ts
import { signupSchema } from '../validation'

describe('signupSchema', () => {
  it('should validate correct signup data', () => {
    const result = signupSchema.safeParse({
      email: 'test@nyu.edu',
      password: 'SecurePass123!',
    })
    expect(result.success).toBe(true)
  })
})
```

### Component Tests

Test React components with user interactions:

```typescript
// src/components/ui/__tests__/kommon-button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { KommonButton } from '../kommon-button'

describe('KommonButton', () => {
  it('handles click events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<KommonButton onClick={handleClick}>Click me</KommonButton>)
    await user.click(screen.getByRole('button'))
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### E2E Tests

Test complete user journeys:

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test('should complete signup flow', async ({ page }) => {
  await page.goto('/signup')
  await page.getByLabel(/email/i).fill('test@nyu.edu')
  await page.getByLabel(/password/i).fill('SecurePass123!')
  await page.getByRole('button', { name: /Sign Up/i }).click()
  
  await expect(page.getByText(/verification/i)).toBeVisible()
})
```

## Test Coverage

View coverage reports after running `pnpm test:coverage`:

```bash
open coverage/lcov-report/index.html
```

Coverage thresholds are enforced:
- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the user sees and does
2. **Use Descriptive Test Names**: `it('should reject non-.edu email')`
3. **Arrange-Act-Assert Pattern**: Setup → Execute → Verify
4. **Mock External Dependencies**: Database, API calls, etc.
5. **Test Edge Cases**: Empty inputs, invalid data, boundary conditions
6. **Keep Tests Fast**: Unit tests should run in milliseconds
7. **Avoid Test Interdependence**: Each test should be independent

## Continuous Integration

Tests run automatically on:
- Every pull request
- Before merging to main
- On push to develop branch

CI will fail if:
- Any test fails
- Coverage drops below 70%
- E2E tests fail

## Debugging Tests

### Jest Tests

```bash
# Run specific test file
pnpm test validation.test.ts

# Run tests matching pattern
pnpm test --testNamePattern="should validate"

# Debug with Node inspector
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Playwright Tests

```bash
# Run specific test file
pnpm test:e2e auth.spec.ts

# Debug with Playwright Inspector
pnpm test:e2e --debug

# Generate test code
pnpm playwright codegen http://localhost:3000
```

## Test Data

For E2E tests, use:
- Unique test emails: `test-${Date.now()}@nyu.edu`
- Test database (separate from development)
- Cleanup after tests

## Property-Based Testing

For complex validation logic, consider property-based testing:

```typescript
import fc from 'fast-check'

it('should always validate .edu emails', () => {
  fc.assert(
    fc.property(fc.emailAddress(), (email) => {
      const eduEmail = email.replace(/@.*$/, '@nyu.edu')
      const result = signupSchema.safeParse({ email: eduEmail, password: 'Test123!' })
      expect(result.success).toBe(true)
    })
  )
})
```

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

Last Updated: February 2025
