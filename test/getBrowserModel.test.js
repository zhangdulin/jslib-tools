/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 11:19:14
 * @Description: 
 */
import tools from "../src/index";

var assert = chai.assert;
var getBrowserModel = tools.getBrowserModel;

describe("浏览器类型校验", () => {
  // it("PhantomJS校验应该为Unknown", () => {
  //   assert.equal(getBrowserModel(), "Unknown");
  // });
  it("Chrome校验应该为Chrome", () => {
    assert.include(getBrowserModel(), 'Chrome');
  });
});
