/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-25 09:17:59
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:24:36
 * @Description: 
 */


import tools from "../src/index";
const { sleepAction, sleepSync } = tools;
var assert = chai.assert;

describe("sleep", () => {
    it("测试 同步 延时", async () => {
        const _start = Date.now();
        await sleepSync(1000);
        const _calc = Date.now() - _start;
        assert.equal(parseInt(_calc / 1000), 1);
    });
    it("测试 异步 延时", (done) => {
        const _start = Date.now();
        sleepAction(1000, () => {
            const _calc = Date.now() - _start;
            assert.equal(parseInt(_calc / 1000), 1);

            done();
        });
    });
});