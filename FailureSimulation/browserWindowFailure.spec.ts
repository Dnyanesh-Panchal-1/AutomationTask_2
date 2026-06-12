import { test } from '@playwright/test'; 
test('Browser Window Handling Failure', async ({ page }) => { 
    await page.goto('https://demoqa.com/browser-windows'); 
    await page.locator('#tabButton').click(); // Intentionally validating on parent page 
    await page.locator('#sampleHeading').textContent(); 
});