import { test, expect } from '@playwright/test';

test.describe('AddCourse Component', () => {
  test('should submit the form with valid data', async ({ page }) => {
    await page.goto('/addcourse');
    await page.fill('input[name="title"]', 'Test Course');
    await page.fill('textarea[name="description"]', 'This is a test course.');
    await page.fill('input[name="imageUrl"]', 'https://example.com/image.png');
    await page.fill('input[name="paymentAmount"]', '100');
    await page.click('button[type="submit"]');
    await expect(page.getByText('Course added successfully!')).toBeVisible();
  });

  test('should show error on incomplete form', async ({ page }) => {
    await page.goto('/addcourse');
    await page.fill('input[name="title"]', '');
    await page.click('button[type="submit"]');
    await expect(page.getByText('Failed to add course.')).toBeVisible();
  });
});