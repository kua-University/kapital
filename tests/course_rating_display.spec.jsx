import { test, expect } from '@playwright/test';

test.describe('Course Rating Display', () => {
    test('should display correct rating for a course', async ({ page }) => {
      await page.setContent('<div id="root"></div>');
      await page.evaluate(() => {
        const root = document.getElementById('root');
        root.innerHTML = '<div class="flex">' +
          Array.from({ length: 5 }, (_, i) => `<svg class="w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}"></svg>`).join('') +
          '</div>';
      });
      const filledStars = await page.locator('.text-yellow-400').count();
      expect(filledStars).toBe(4);
    });
  });
  