/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-24 14:25:03
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 11:04:02
 * @Description: 
 */
import tools from "../src/index";

const { getGlobal, setGlobal, globalStore, removeGlobalItem } = tools;
var assert = chai.assert;
describe('window', () => {
    it('global', () => {
        const keyObj = 'key'
        const bool = setGlobal(keyObj, { value: '1' })
        assert.equal(bool, true);

        const getObj = getGlobal(keyObj)
        assert.equal(getObj.value, '1');

        const rmBool = removeGlobalItem(keyObj)
        assert.equal(rmBool, true);

        const hasObj = getGlobal(keyObj)
        assert.equal(hasObj, undefined);

    })

})