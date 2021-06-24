/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-24 14:25:03
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 14:30:14
 * @Description: 
 */
import tools from "../src/index";

const { getGlobal, setGlobal, globalStore, removeGlobalItem } = tools;
var expect = chai.expect;
describe('window', () => {
    it('global', () => {
        const keyObj = 'key'
        const bool = setGlobal(keyObj, { value: '1' })
        expect(bool).toBe(true)

        const getObj = getGlobal(keyObj)
        expect(getObj.value).toBe('1')

        const rmBool = removeGlobalItem(keyObj)
        expect(rmBool).toBe(true)
        const hasObj = getGlobal(keyObj)
        expect(hasObj).toBeUndefined()
    })

})