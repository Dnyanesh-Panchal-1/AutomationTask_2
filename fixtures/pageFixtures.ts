import {test as base} from '@playwright/test';
import { BrowserWindowsPage } from '../pages/BrowserWindowsPage';
import { BookStorePage } from '../pages/BookStorePage';


type PageFixtures={
    browserWindowsPage: BrowserWindowsPage;
    bookStorePage: BookStorePage
};

export const test =base.extend<PageFixtures>({
    browserWindowsPage: async ({page},use)=>{
        await use(new BrowserWindowsPage(page));
    },
    bookStorePage: async ({page},use)=>{
        await use(new BookStorePage(page));
    },

});

 export {expect} from '@playwright/test'