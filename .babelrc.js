/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-09 15:56:35
 * @Description: 
 */
module.exports = {
  "presets": [
    // require("@babel/preset-env")
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  }
}

