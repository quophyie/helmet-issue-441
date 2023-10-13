import {jest} from '@jest/globals'
import helmet from 'helmet'

/** uncomment //@ts-ignore below to fix */
/** //@ts-ignore */
helmet();

describe('Helmet Issue 441', () => {
    it('fails on call to helmut() function', () => {
        expect(true).toBe(true);
    });
});
