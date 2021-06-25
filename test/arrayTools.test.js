/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-25 13:25:57
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 13:56:35
 * @Description: 
 */
import tools from "../src/index";

const {
    arrayToObject,
    arrayMove,
    arrayMoveMutate
} = tools.arrayTools
const assert = chai.assert
const expect = chai.expect

describe("array", () => {
    it('arrayToObject', () => {
        const arr = [{
            id: 1,
            test: 123
        }, {
            id: 2,
            test: 345
        }]
        const obj = arrayToObject('id', arr)
        assert.deepEqual(obj['2'], arr[1])
    })

    it('arrayMove', () => {
        const input = ['a', 'b', 'c'];
        const array1 = arrayMove(input, 1, 2);
        assert.deepEqual(array1, ['a', 'c', 'b'])
        const array2 = arrayMove(input, -1, 0);
        assert.deepEqual(array2, ['c', 'a', 'b'])

        const array3 = arrayMove(input, -2, -3);
        assert.deepEqual(array3, ['b', 'a', 'c'])
    })

    it('arrayMoveMutate', () => {
        const input1 = ['a', 'b', 'c'];
        arrayMoveMutate(input1, 1, 2);
        assert.deepEqual(input1, ['a', 'c', 'b'])

        const input2 = ['a', 'b', 'c'];
        arrayMoveMutate(input2, -1, 0);
        assert.deepEqual(input2, ['c', 'a', 'b'])

        const input3 = ['a', 'b', 'c'];
        arrayMoveMutate(input3, -2, -3);
        assert.deepEqual(input3, ['b', 'a', 'c'])
    })
})