import {test} from'../fixtures/pageFixtures';
import { mockedBooks } from '../test-data/books';


test('TC_005: Mock Books API response and verify the booke being displayed @smoke', async({page, bookStorePage})=>{

    await page.route(
        '**//BookStore/v1/Books',
        async route=>{
            await route.fulfill({
                status:200,
                contentType: 'application/json',

                body:JSON.stringify({
                    books:mockedBooks
                
                })
            });
        }
    );

    await bookStorePage.goto();

    await bookStorePage.verifyBookVisible(mockedBooks[0].title);
    await bookStorePage.verifyBookVisible(mockedBooks[1].title);
    
});

test ('TC_006: Mock empty API response @regression', async ({page,bookStorePage})=>{
    await page.route(
        '**/BookStore/v1/Books',
        async route=>{
            await route.fulfill({
                status:200,
                contentType:'application/json',

                body: JSON.stringify({
                    books:[]
                })
            });
        } 
    );
    await bookStorePage.goto()
    await bookStorePage.verifyNoBookDisplayed()
});

test ('TC_007: Mock delayed API response @regression', async({page, bookStorePage})=>{
    await page.route(
        '**/BookStore/v1/Books',
        async route=>{
            await new Promise(resolve=>setTimeout(resolve,3000));
            await route.fulfill({
                status:200,
                contentType:'application/json',
                body:JSON.stringify({
                    books: mockedBooks
                })
            });
        }
    );

    await bookStorePage.goto();
    await bookStorePage.verifyBookLoaded(mockedBooks[0].title
);
});
