/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-16 17:31:21
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";

var handleParam = tools.handleParam;
var expect = chai.expect;

describe("删除对象里面value值为null的键值对", () => {
  it("{a:1,b:null}应该返回{a:1}", () => {
    expect(handleParam({ a: 1, b: null })).to.not.include.keys("b");
  });
});
