import {test} from '../fixtures/pageFixtures';


test('TC_001: Verify New Tab button opens a new tab @smoke',async({page,browserWindowsPage})=>{
    await browserWindowsPage.goto();
    const [childPage]=await Promise.all([
        page.context().waitForEvent('page'),
        browserWindowsPage.openNewTab()
    ]);
    await childPage.waitForLoadState();
});

test ('TC_002: Verify content of newly opened tab @regression', async ({page,browserWindowsPage})=>{
    await browserWindowsPage.goto();
    const [childPage]= await Promise.all([
        page.context().waitForEvent('page'),
        browserWindowsPage.openNewTab()
    ]);
    await childPage.waitForLoadState();
    await browserWindowsPage.verifySamplePageContent;
});

test ('TC_003: Close child tab and switch back to parent @regression', async ({page,browserWindowsPage})=>{
    await browserWindowsPage.goto();
    const [childPage]=await Promise.all([
        page.context().waitForEvent('page'),
        browserWindowsPage.openNewTab()
    ]);

    await childPage.waitForLoadState();
    await childPage.close();

    await browserWindowsPage.verifyParentPageIsActive();

});

test ('TC_004 Verify New Window Message functionality @regression', async ({page,browserWindowsPage})=>{
    await browserWindowsPage.goto();
    const [messagePage]=await Promise.all([
        page.context().waitForEvent('page'),
        browserWindowsPage.openNewWindowMessage()
    ]);

    await messagePage.waitForLoadState();
    await browserWindowsPage.verifyNewWindowMessage(messagePage);
});
