/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-10 15:44:11
 * @Description: 
 */
/* eslint-disable no-undef */
// import tools from "../src/index";
import { getBrowserModel } from "../src/index";

var assert = chai.assert;
// const getBrowserModel = tools.getBrowserModel
describe("浏览器类型校验", () => {
  it("PhantomJS校验应该为Unknown", () => {
    assert.equal(getBrowserModel(), "Unknown");
  });
});
