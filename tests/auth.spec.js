// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Auth Flow", () => {
  test("should allow a user to sign up", async ({ page }) => {
    await page.goto("/sign-up");

    await page.fill('input[name="email"]', "testuser@example.com");
    await page.fill('input[name="password"]', "Password123!");
    await page.fill('input[name="cPassword"]', "Password123!");

    await page.click("text=Create Account");

    // Expect a success notification
    await expect(
      page.locator("text=Account created successfully")
    ).toBeVisible();
  });

  test("should allow a user to log in", async ({ page }) => {
    await page.goto("/log-in");

    await page.fill('input[name="email"]', "testuser@example.com");
    await page.fill('input[name="password"]', "Password123!");

    await page.click("text=Log In");

    // Expect a success notification
    await expect(page.locator("text=Welcome to Exclusive")).toBeVisible();
  });

  test("should show an error if the email field is empty when resetting password", async ({
    page,
  }) => {
    await page.goto("/log-in");

    await page.click("text=Forgot Password?");

    // Expect an error notification
    await expect(page.locator("text=Please enter your email")).toBeVisible();
  });
});
