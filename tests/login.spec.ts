import { test, expect } from "@playwright/test";

test("login works", async ({ page }) => {
  await page.goto("/");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await expect(page).toHaveURL(/inventory/);
});
