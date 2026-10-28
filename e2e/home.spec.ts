import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("renders the title and heading", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Distance Darts");
    await expect(
      page.getByRole("heading", { level: 1, name: "Distance Darts" }),
    ).toBeVisible();
  });
});
