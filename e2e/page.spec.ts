import { expect, test } from "@playwright/test";

test.describe("page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/App/);
  });

  test("has heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "App" })
    ).toBeVisible();
  });
});
