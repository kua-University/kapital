import { test, expect } from '@playwright/test';

test.describe('CheckoutForm Component', () => {
    test('should process payment successfully', async ({ page }) => {
      await page.goto('/checkout');
      await page.fill('input[name="cardNumber"]', '4242424242424242');
      await page.fill('input[name="cardExpiry"]', '12/30');
      await page.fill('input[name="cardCvc"]', '123');
      await page.click('button[type="submit"]');
      await expect(page.getByText('Payment Successful!')).toBeVisible();
    });
  
    test('should show error on invalid card', async ({ page }) => {
      await page.goto('/checkout');
      await page.fill('input[name="cardNumber"]', '4000000000000002');
      await page.fill('input[name="cardExpiry"]', '12/30');
      await page.fill('input[name="cardCvc"]', '123');
      await page.click('button[type="submit"]');
      await expect(page.getByText('Payment failed. Please try again.')).toBeVisible();
    });
  });