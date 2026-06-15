import { Page, Locator, expect } from "@playwright/test";
import { routes } from "../constants/routes";
import { selectors } from "../constants/selectors";
import { messages } from "../constants/messages";

export class BookStorePage{
    readonly page:Page;
    readonly bookRows: Locator;

    constructor(page:Page){
        this.page=page;
        this.bookRows=page.locator(selectors.bookRows);
    }

    async goto(): Promise<void>{
        await this.page.goto(routes.bookStore);
    }

    async verifyBookIsDisplayed(expectedCount:number): Promise<void>{
        await expect(this.bookRows).toHaveCount(expectedCount);
    }

    async verifyBookVisible(bookTitle:string): Promise<void>{
        await expect(this.page.getByText(bookTitle)).toBeVisible;
    }

    async verifyNoBookDisplayed():Promise<void>{
        await expect(this.bookRows).toHaveCount(0);
    }

    async verifyBookLoaded(bookTitle:string): Promise<void>{
        await expect(
            this.page.getByText(bookTitle)
        ).toBeVisible();
    }
}