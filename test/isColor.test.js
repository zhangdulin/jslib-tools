/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 17:35:14
 * @Description: 
 */
/* eslint-disable no-undef */
// import tools from "../src/index";
import tools from "../src/index";

const isColor = tools.isColor
var assert = chai.assert;
describe("顏色校驗", () => {
  it("顏色校驗 false", () => {
    assert.equal(isColor('12'), false);
  });
});

describe("顏色校驗2", () => {
  it("顏色校驗2 true", () => {
    assert.equal(isColor('#fff'), true);
  });
});

