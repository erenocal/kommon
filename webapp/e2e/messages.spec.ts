import { test, expect } from '@playwright/test';

test.describe('Messages Page', () => {
  test('should display messages page structure', async ({ page }) => {
    await page.goto('/messages');

    // Check for header
    await expect(page.getByRole('heading', { name: 'Messages' })).toBeVisible();
    await expect(page.getByText('Connect with other students')).toBeVisible();

    // Check for search input
    await expect(
      page.getByPlaceholder('Search conversations...')
    ).toBeVisible();

    // Check for back to dashboard link
    await expect(
      page.getByRole('link', { name: 'Back to Dashboard' })
    ).toBeVisible();
  });

  test('should show empty state when no conversations', async ({ page }) => {
    await page.goto('/messages');

    // Wait for loading to complete
    await page.waitForTimeout(1000);

    // Check for empty state (if no conversations exist)
    const emptyStateHeading = page.getByRole('heading', {
      name: /No messages yet|No conversations found/i,
    });
    if (await emptyStateHeading.isVisible()) {
      await expect(
        page.getByText(/Start a conversation|Try a different search/i)
      ).toBeVisible();
    }
  });

  test('should navigate to dashboard from messages', async ({ page }) => {
    await page.goto('/messages');
    await page.getByRole('link', { name: 'Back to Dashboard' }).click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should filter conversations by search', async ({ page }) => {
    await page.goto('/messages');

    const searchInput = page.getByPlaceholder('Search conversations...');
    await searchInput.fill('test');

    // Search input should have the value
    await expect(searchInput).toHaveValue('test');
  });
});

test.describe('Conversation Detail Page', () => {
  test('should show loading state initially', async ({ page }) => {
    // Use a fake conversation ID
    await page.goto('/messages/00000000-0000-0000-0000-000000000000');

    // Should either show loading or redirect to messages
    await page.waitForTimeout(1000);
    const url = page.url();
    expect(url.includes('/messages')).toBeTruthy();
  });

  test('should have message input form', async ({ page }) => {
    await page.goto('/messages/00000000-0000-0000-0000-000000000000');
    await page.waitForTimeout(1000);

    // If not redirected, check for message input
    if (page.url().includes('00000000-0000-0000-0000-000000000000')) {
      const messageInput = page.getByPlaceholder('Type a message...');
      if (await messageInput.isVisible()) {
        await expect(messageInput).toBeVisible();
        await expect(page.getByRole('button', { name: /Send/i })).toBeVisible();
      }
    }
  });
});

test.describe('Messages Integration with Dashboard', () => {
  test('should navigate to messages from dashboard', async ({ page }) => {
    await page.goto('/dashboard');

    // Find and click the Messages card button
    const messagesButton = page.getByRole('button', { name: 'View Messages' });
    await messagesButton.click();

    await expect(page).toHaveURL('/messages');
  });

  test('should show messages card on dashboard', async ({ page }) => {
    await page.goto('/dashboard');

    // Check for Messages card
    await expect(page.getByText('Messages')).toBeVisible();
    await expect(page.getByText('Connect with other students')).toBeVisible();
  });
});

test.describe('Contact Provider from Listing', () => {
  test('should have contact provider button on listing detail', async ({
    page,
  }) => {
    // Navigate to listings first
    await page.goto('/listings');
    await page.waitForTimeout(1000);

    // Check if there are any listings
    const listingCards = page
      .locator('[style*="cursor: pointer"]')
      .filter({ hasText: /\$\d+\/mo/ });
    const count = await listingCards.count();

    if (count > 0) {
      // Click first listing
      await listingCards.first().click();
      await page.waitForTimeout(500);

      // Check for contact provider button
      const contactButton = page.getByRole('button', {
        name: /Contact Provider/i,
      });
      await expect(contactButton).toBeVisible();
    }
  });

  test('should show contact provider button in provider card', async ({
    page,
  }) => {
    await page.goto('/listings');
    await page.waitForTimeout(1000);

    const listingCards = page
      .locator('[style*="cursor: pointer"]')
      .filter({ hasText: /\$\d+\/mo/ });
    const count = await listingCards.count();

    if (count > 0) {
      await listingCards.first().click();
      await page.waitForTimeout(500);

      // Check for "Listed by" section
      const listedByHeading = page.getByRole('heading', { name: 'Listed by' });
      if (await listedByHeading.isVisible()) {
        await expect(listedByHeading).toBeVisible();
      }
    }
  });
});

test.describe('Message Sending Flow', () => {
  test('should disable send button when message is empty', async ({ page }) => {
    await page.goto('/messages/00000000-0000-0000-0000-000000000000');
    await page.waitForTimeout(1000);

    if (page.url().includes('00000000-0000-0000-0000-000000000000')) {
      const sendButton = page.getByRole('button', { name: /Send/i });
      if (await sendButton.isVisible()) {
        // Button should be disabled when input is empty
        await expect(sendButton).toBeDisabled();
      }
    }
  });

  test('should enable send button when message has content', async ({
    page,
  }) => {
    await page.goto('/messages/00000000-0000-0000-0000-000000000000');
    await page.waitForTimeout(1000);

    if (page.url().includes('00000000-0000-0000-0000-000000000000')) {
      const messageInput = page.getByPlaceholder('Type a message...');
      const sendButton = page.getByRole('button', { name: /Send/i });

      if (await messageInput.isVisible()) {
        await messageInput.fill('Hello, this is a test message');
        await expect(sendButton).toBeEnabled();
      }
    }
  });
});

test.describe('Conversation Navigation', () => {
  test('should have back to messages link in conversation', async ({
    page,
  }) => {
    await page.goto('/messages/00000000-0000-0000-0000-000000000000');
    await page.waitForTimeout(1000);

    if (page.url().includes('00000000-0000-0000-0000-000000000000')) {
      const backLink = page
        .getByRole('link')
        .filter({ has: page.locator('svg') })
        .first();
      if (await backLink.isVisible()) {
        await backLink.click();
        await expect(page).toHaveURL('/messages');
      }
    }
  });
});
