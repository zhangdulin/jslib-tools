/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 17:32:26
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";

var getDefaultAvatar = tools.getDefaultAvatar;
var assert = chai.assert;

describe("异常流程测试", () => {
  it("如果什么都不传，应该返回空字符串", () => {
    assert.equal(getDefaultAvatar(), "");
  });
});
