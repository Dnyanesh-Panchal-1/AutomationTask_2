import { test, expect } from '@playwright/test';



test('Mock Response Failure Simulation', async ({ page }) => {



  await page.route(

    '**/BookStore/v1/Books',

    async route => {

      await route.abort();

    }

  );



  await page.goto('https://demoqa.com/books');



  await expect(

    page.getByText('Playwright Mastery')

  ).toBeVisible();



});