/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 11:12:43
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";

var assert = chai.assert;
var getDeviceModel = tools.getDeviceModel;

describe("获取手机操作系统类型校验", () => {
  // it("PhantomJS校验应该为Unknown", () => {
  //   assert.equal(getDeviceModel(), "Unknown");
  // });
  it("Chrome校验应该为Unknown", () => {
    assert.equal(getDeviceModel.device.webKit,true);
  });
});
