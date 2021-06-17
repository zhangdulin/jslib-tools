/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 17:29:27
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";

var isSpecialChar = tools.isSpecialChar;
var assert = chai.assert;

describe("检查是否为特殊字符的测试", () => {
  it("~！@#￥%……&*应该是特殊字符", () => {
    assert.equal(isSpecialChar("~！@#￥%……&*"), true);
  });
  it("数字不应该是特殊字符", () => {
    assert.equal(isSpecialChar(1234567890), false);
  });
  it("字母不应该是特殊字符", () => {
    assert.equal(isSpecialChar("ABCDabcd"), false);
  });
  it("文字不应该是特殊字符", () => {
    assert.equal(isSpecialChar("你好"), false);
  });
});
