<!--
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-08 11:30:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-02 15:42:42
 * @Description:
-->

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/dt/notepad4e.svg)](https://www.npmjs.com/package/jslib-tools)
![NpmVersion](https://img.shields.io/npm/v/npm.svg)

### Description:

前端 js 工具库: 封装常用的工具函数，如日期格式化、浏览器判断等，提高开发效率

## Todo

- [√] 引入代码校验工具 eslint
- [√] jsdocs typedocs 自动化生成 api 文档
- [√] 测试覆盖率统计 coverage
- [√] 支持Typescript
- [√] 支持浏览器环境，node 环境、es6 环境

### 如何使用:

1. 直接下载 `dist` 目录下的 `jtools.min.js` 使用，支持 UMD 通用模块规范
2. 使用 npm 安装

#### 浏览器：

```js
<script src="jtools.min.js"></script>
<script>
    var result = jtools.deepCopy({a:1})
</script>
```

#### npm:

`npm i jslib-tools`

##### 全部加载（webpack、RequireJS、SeaJS 等）：

```js
var jtools = require("jslib-tools");
var result = jtools.deepCopy({a:1});
```

#### es6

```js
import jtools from "jslib-tools";
var result = jtools.deepCopy({a:1});
```

### 按需加载

结合[babel-plugin-import-load](https://github.com/Pasoul/babel-plugin-import-load)按需加载可以极大的减小依赖包的体积

```js
import { add } from "jslib-tools";
var result = deepCopy({a:1});
```

#### 自动化生成文档

[JSDoc](http://www.css88.com/doc/jsdoc/about-configuring-jsdoc.html)是一个根据 javascript 文件中注释信息，生成 JavaScript 应用程序或库、模块的 API 文档 的工具。你可以使用他记录如：命名空间，类，方法，方法参数等。类似 JavaDoc 和 PHPDoc。现在很多编辑器或 IDE 中还可以通过 JSDoc 直接或使用插件生成智能提示。从而使开发者很容易了解整个类和其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本。
[typedoc](https://typedoc.org/) 是根据typescript注释生成的文档

文件
`npm run typedoc`
api-docs: typescript 方法文档

`npm run doc`
docs: js 方法文档


### 扩展

如果你想添加自己的工具库，在 `src` 目录创建文件，对应 `test` 目录添加测试用例，执行 `npm run test`

### utils 
vue 和 常用插件 axios 封装工具类

### 迭代记录

```
0.1.3

增加 
getHttpBase64 获取网络图片转成base64
Regs 正则校验对象 包括手机号 邮箱等常用正则规则
getUUID 随机字符串 前端设置唯一id
appendJs 插入js 支持回调
clipboardObj 复制和获取黏贴内容
cursortPosition 获取焦点光标控制
sleepSync 睡眠
sleepAction 延时执行
objTools 对象操作 判断key 对象相等
getGlobal, setGlobal, globalLib, removeGlobalItem window对象操作等
arrayTools 数组相关操作 arrayToObject 数组转对象 arrayMoveMutate 数组移动位置原数组 arrayMove 数组移动位置返回新数组
judgeTools 判断对象数组等类型方法
byteTools b2size 自动转换合适的单位 bytes 自定义设置转换的单位
jsonTools decode_url_param, json_replace, json_encode, json_decode 对象字符串转换等
store cookie storage
---

删除
isMobile
b2size
```
```
0.1.4

增加 
judgeTools.isJSONStringify 判断字符串是否可以转换对象
createWebsocket 创建 websocket

```


