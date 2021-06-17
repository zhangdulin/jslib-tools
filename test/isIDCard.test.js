/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 17:30:33
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";

var isIDCard = tools.isIDCard;
var assert = chai.assert;

describe("校验18位身份证号码", () => {
  it("如果没有提供任何参数，应该返回false", () => {
    assert.equal(isIDCard(), false);
  });
  it("512501197506045175应该返回true", () => {
    assert.equal(isIDCard(512501197506045175), true);
  });
  it("51052119850508797x应该返回true", () => {
    assert.equal(isIDCard("51052119850508797x"), true);
  });
  it("1232132131应该返回false", () => {
    assert.equal(isIDCard(1232132131), false);
  });
});
