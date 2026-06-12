import {test as base} from '@playwright/test';
import { TestUtility } from '../utils/TestUtility';

type UtilityFixture={
    utility: TestUtility;
};

export const test=base.extend<UtilityFixture>({
    utility: async ({},use)=>{
        await use(new TestUtility());
    },
});

export {expect} from '@playwright/test';