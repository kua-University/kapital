import { test, expect } from '@playwright/test';

test.describe('Navbar Navigation Test', () => {
    test('should navigate to the Courses page when the Courses link is clicked', async ({ page }) => {
       
        await page.goto('/home'); // Replace with your actual route

        // Click on the "Courses" link
        await page.click('text=Courses');

        // Verify that the URL changes to the Courses page
        await expect(page).toHaveURL('/courses');
    });

    test('should navigate to the My Courses page when the My Courses link is clicked', async ({ page }) => {
        await page.goto('/home'); // Replace with your actual route

        // Click on the "My Courses" link
        await page.click('text=My Courses');

        // Verify that the URL changes to the My Courses page
        await expect(page).toHaveURL('/my-courses');
    });

    test('should navigate to the Categories page when the Categories link is clicked', async ({ page }) => {
        await page.goto('/home'); // Replace with your actual route

        // Click on the "Categories" link
        await page.click('text=Categories');

        // Verify that the URL changes to the Categories page
        await expect(page).toHaveURL('/categories');
    });

    test('should navigate to the Contact Us page when the Contact Us link is clicked', async ({ page }) => {
        await page.goto('/home'); // Replace with your actual route

        // Click on the "Contact Us" link
        await page.click('text=Contact Us');

        // Verify that the URL changes to the Contact Us page
        await expect(page).toHaveURL('/contact');
    });
});
