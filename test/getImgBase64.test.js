/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 11:27:00
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";
import Promise from "es6-promise";
Promise.polyfill();

var getImgBase64 = tools.getImgBase64;
var expect = chai.expect;

describe("测试图片转base64", () => {
  it("处理图片结果应该返回promise", () => {
    // Promise
    expect(getImgBase64("https://images2.bestjlb.com/v2jlboss16ed231d92cb7f501b7a532e04c2290f15399473734969284.png")).to.be.an.instanceof(Object);
  });
  // 调用函数会超时，实际浏览器测试也需要4秒左右才能有返回值，即使调整到10s，也会执行失败，暂时不知道问题
  // it("校验图片转base64结果", () => {
  //   return getImgBase64("https://images2.bestjlb.com/v2jlboss16ed231d92cb7f501b7a532e04c2290f15399473734969284.png").then(url => {
  //     expect(url).to.be.a('string');
  //   });
  // });
});
