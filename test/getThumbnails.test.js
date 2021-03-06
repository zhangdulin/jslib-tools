/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-10 18:16:50
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-11 10:54:56
 * @Description: 
 */
/* eslint-disable no-undef */
import tools from "../src/index";

var assert = chai.assert;
var getThumbnails = tools.getThumbnails;

describe("异常流程测试", () => {
  it("如果没有提供任何参数，应该返回空字符串", () => {
    assert.equal(getThumbnails(), "");
  });
  it("如果没有提供图片url，应该返回空字符串", () => {
    assert.equal(getThumbnails({ src: "" }), "");
  });
  it("如果图片url带有？，原样输出图片url", () => {
    assert.equal(
      getThumbnails({
        src:
          "https://media.bestjlb.com/jlbossREYxMEYwODQtRDI2My00NDQxLTg5REUtNkE5NDA1RThGRDgwL0wwLzAwMQ==.jpeg?x-oss-process=image/resize,w_750&x-oss-process=image/auto-orient,0 "
      }),
      "https://media.bestjlb.com/jlbossREYxMEYwODQtRDI2My00NDQxLTg5REUtNkE5NDA1RThGRDgwL0wwLzAwMQ==.jpeg?x-oss-process=image/resize,w_750&x-oss-process=image/auto-orient,0 "
    );
  });
});
