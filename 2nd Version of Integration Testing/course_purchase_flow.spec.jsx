import { test, expect } from '@playwright/test';

// Integration Test: AddCourse -> CheckoutForm
test.describe('Course Purchase Flow', () => {
  test('should add a course and proceed to checkout', async ({ page }) => {
    // Add Course
    await page.goto('/addcourse');
    await page.fill('input[name="title"]', 'Integration Test Course');
    await page.fill('textarea[name="description"]', 'Integration test course description.');
    await page.fill('input[name="imageUrl"]', 'https://example.com/image.png');
    await page.fill('input[name="paymentAmount"]', '150');
    await page.click('button[type="submit"]');
    await expect(page.getByText('Course added successfully!')).toBeVisible();

    // Navigate to Checkout
    await page.goto('/checkout');
    await page.fill('input[name="cardNumber"]', '4242424242424242');
    await page.fill('input[name="cardExpiry"]', '12/30');
    await page.fill('input[name="cardCvc"]', '123');
    await page.click('button[type="submit"]');
    await expect(page.getByText('Payment Successful!')).toBeVisible();
  });
});