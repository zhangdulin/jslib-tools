/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 17:30:41
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";

var isEmoji = tools.isEmoji;
var assert = chai.assert;

describe("检查是否为emoji表情的测试", () => {
  it("😃应该是emoji表情", () => {
    assert.equal(isEmoji("😃"), true);
  });
  it("中文不应该是emoji表情", () => {
    assert.equal(isEmoji("你好"), false);
  });
  it("数字不应该是emoji表情", () => {
    assert.equal(isEmoji(12334), false);
  });
  it("特殊字符不应该是emoji表情", () => {
    assert.equal(isEmoji("~!@#%$&*($))"), false);
  });
});
