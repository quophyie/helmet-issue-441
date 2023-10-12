import {jest} from '@jest/globals'
import helmet from 'helmet'
helmet()
describe('Helmet Issue', () => {
    it('fails on call to ', () => {
        expect(true).toBe(true);
    })
})