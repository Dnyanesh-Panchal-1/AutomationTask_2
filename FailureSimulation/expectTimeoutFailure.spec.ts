import { test, expect } from '@playwright/test'; 
test('Expect Timeout Simulation', async ({ page }) => { 
    await page.goto( 'https://demoqa.com/browser-windows' ); 
    await expect( page.getByText('Batman') ).toBeVisible({ timeout: 2000 });
});