import { test, expect } from '@playwright/test';



test('Network Mock Failure Simulation', async ({ page }) => {



  await page.route(

    '**/BookStore/v1/Bookgftgygs',

    async route => {



      await route.fulfill({

        status: 200,

        contentType: 'application/json',



        body: JSON.stringify({

          books: []

        })

      });



    }

  );



  await page.goto(

    'https://demoqa.com/books'

  );



  await expect(

    page.getByText('Playwright Mastery')

  ).toBeVisible();



});