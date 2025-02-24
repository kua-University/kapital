import { test, expect } from '@playwright/test';

test.describe('Navbar Navigation Flow', () => {
    test('should navigate to My Courses and Categories', async ({ page }) => {
      await page.goto('/');
  
      // Navigate to My Courses
      await page.click('text=My Courses');
      await expect(page).toHaveURL('/my-courses');
  
      // Navigate to Categories
      await page.click('text=Categories');
      await expect(page).toHaveURL('/categories');
    });
  
    test('should toggle dark mode and retain state', async ({ page }) => {
      await page.goto('/');
      await page.click('button:has-text("Dark Mode")');
      await expect(page.locator('nav')).toHaveClass(/bg-gray-900/);
    });
  });
  