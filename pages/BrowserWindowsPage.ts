import {Page, Locator, expect} from '@playwright/test';
import { routes } from '../constants/routes';
import { selectors } from '../constants/selectors';
import { messages } from '../constants/messages';

export class BrowserWindowsPage{
    readonly page : Page;
    readonly newTabButton: Locator;
    readonly newWindowButton: Locator;
    readonly newWindowMessageButton: Locator;

    constructor(page: Page){
        this.page=page;

        this.newTabButton=page.locator(selectors.newTabButton);
        this.newWindowButton=page.locator(selectors.newWindowButton);
        this.newWindowMessageButton=page.locator(selectors.newWindowMessageButton)
    }
     async goto(): Promise<void>{
        await this.page.goto(routes.browserWindows);
     }

     async openNewTab(): Promise<void>{
        await this.newTabButton.click();
     }

     async openNewWindow(): Promise<void>{
        await this.newWindowButton.click();
     }

     async openNewWindowMessage():Promise<void>{
        await this.newWindowMessageButton.click();
     }

     async verifySamplePageContent(childPage: Page):Promise<void>{
        await expect(
            childPage.locator(selectors.sampleHeading)
        ).toHaveText(messages.samplePageText)
     }
     
     async verifyBrowserWindowPageLoaded(): Promise<void>{
        await expect(this.newTabButton).toBeVisible();
     }

     async verifyParentPageIsActive(): Promise<void>{
        await expect(this.newTabButton).toBeVisible();
     }

     async verifyNewWindowMessage(messagePage:Page):Promise<void>{
        await expect(messagePage.locator('body')).toContainText(messages.newWindowMesage)
     }
}