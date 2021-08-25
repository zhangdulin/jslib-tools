/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-25 13:25:57
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-08-24 16:23:38
 * @Description: 
 */
import tools from "../src/index";

const {
    objectConversionToList
} = tools.objTools
const assert = chai.assert
const expect = chai.expect

describe("obj", () => {
    it('objectConversionToList', () => {
        const arr = [{name:'1',age:'58'}, {name:'你好',age:'年龄'}]
        const result = [{label:'你好',value:'1'},{label:'年龄',value:'58'}]
        const obj = objectConversionToList(arr[0], arr[1])
        assert.deepEqual(obj, result)
    })
})