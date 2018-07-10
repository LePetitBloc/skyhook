import { Codacy } from '../src/providers/Codacy'
import { Tester } from './Tester'

const json = {
    commit: {
        data: {
            uuid: '4cbf02df84dbcaa44b75a64ed832f7dbff2231dd',
            urls: {
                delta: 'https://www.codacy.com/public/jquery/jquery.git/commit?bid=21776&cid=6037089'
            }
        },
        results: {
            fixed_count: 1,
            new_count: 0
        }
    }
}

describe('/POST codacy', () => {
    it('commit', async () => {
        Tester.test(new Codacy(), json, null)
    })
})
