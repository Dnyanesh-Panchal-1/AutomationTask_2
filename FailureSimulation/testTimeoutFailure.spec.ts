import { test } from '@playwright/test'; 
test('Test Timeout Simulation', async ({ page }) => { 
    test.setTimeout(1000); await page.waitForTimeout(3000);
});