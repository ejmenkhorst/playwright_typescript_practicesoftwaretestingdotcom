import { test, expect } from '@playwright/test';

test.describe('checkout features', () => {
  test.beforeEach(async ({ page }) => {
    // Fill shopping cart with items via API
    
    // Go to the checkout url before each test.
    await page.goto('/checkout'); 
  });

test('checkoutpage has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Checkout - Practice Software Testing - Toolshop/);
  
});
});