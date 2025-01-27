// tests/welcome.spec.js
const { test, expect } = require('@playwright/test');

test.describe("Welcome page", () => {
  test("should render welcome page and navigate to home on button click", async ({ page }) => {
    // Navigate to the /welcome page.
    await page.goto("/welcome");

    // Wait for the page to load and content to be visible.
    await expect(page.locator("text=Welcome to Our school system")).toBeVisible({ timeout: 10000 });

    // Verify the additional content.
    await expect(
      page.locator("text=Click below to start adding courses or exploring content.")
    ).toBeVisible({ timeout: 10000 });
    await expect(page.locator("button:has-text('Go to Home')")).toBeVisible();

    // Click the "Go to Home" button and verify navigation to /home.
    await page.locator("button:has-text('Go to Home')").click();
    await expect(page).toHaveURL("/home", { timeout: 10000 });
  });
});
