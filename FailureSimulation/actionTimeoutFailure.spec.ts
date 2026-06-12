import { test } from '@playwright/test'; 
test('Action Timeout Simulation', async ({ page }) => { 
    await page.goto( 'https://demoqa.com/browser-windows' ); 
    await page.locator('#invalidButton').click({ timeout: 2000 }); 
});