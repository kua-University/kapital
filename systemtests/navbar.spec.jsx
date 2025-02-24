import { test, expect } from '@playwright/test';

test.describe('Navbar Component', () => {
    test('should navigate to Courses page', async ({ page }) => {
      await page.goto('/');
      await page.click('text=Courses');
      await expect(page).toHaveURL('/courses');
    });
  
    test('should toggle dark mode', async ({ page }) => {
      await page.goto('/');
      await page.click('button:has-text("Dark Mode")');
      await expect(page.locator('nav')).toHaveClass(/bg-gray-900/);
    });
  });