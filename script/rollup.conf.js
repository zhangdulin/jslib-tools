/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 10:54:37
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 10:52:33
 * @Description: 
 */
// 令 Rollup 从 JSON 文件中读取数据。
const pkg = require("../package.json");
const path = require("path");
// rollup不会主动寻找node_modules文件夹下的安装包
// rollup-plugin-node-resolve可以告诉rollup如何正确的查找模块
const nodeResolve = require("rollup-plugin-node-resolve");
// npm包大多是commonjs规范，需要将commonjs模块转换为es6供rollup处理
const commonjs = require("rollup-plugin-commonjs");
// const typescript = require("rollup-plugin-typescript2");
const typescript = require("rollup-plugin-typescript");


const babel = require("rollup-plugin-babel");
const packageName = pkg.config.packageName;


const resolve = p => {
  return path.resolve(__dirname, "../", p);
};

const banner = "/*!\n" + " * jtools v" + pkg.version + "\n" + " * jlb web team\n" + " */";

const extensions = ['.js', '.ts'];

// 分别编译三种运行环境的包:commonjs、es module、umd
const builds = {
  common: {
    entry: resolve("src/index.js"),
    dest: resolve(`${pkg.main}`),
    format: "cjs",
    banner
  },
  umd: {
    entry: resolve("src/index.js"),
    dest: resolve(`dist/${packageName}.min.js`),
    format: "umd",
    moduleName: packageName, // 浏览器端打开，通过jtools.add调用
    banner
  },
  esm: {
    entry: resolve("src/index.js"),
    dest: resolve(`${pkg.module}`),
    format: "es",
    banner
  }
};

function getConfig(name) {
  const opts = builds[name];
  // 构建rollup执行的config
  const config = {
    input: opts.entry,
    plugins: [
      // commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
      commonjs({
        namedExports: {
          "node_modules/core-js/library/modules/es6.object.to-string.js": ["default"]
        }
      }),
      // 如果项目引入node_modules第三方插件，需要打开此配置
      nodeResolve({
        extensions,
        modulesOnly: true,
      }),
      // resolve(), // 查找和打包node_modules中的第三方模块
      // commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
      typescript(), // 解析TypeScript
      // babel({
      //   exclude: 'node_modules/**',
      //   extensions,
      // })
      babel({
        exclude: "node_modules/**",
        babelrc: false, // 不读取babelrc文件
        extensions,
        presets: [["@babel/env", { modules: false }, '@babel/preset-typescript']], // 设置modules: false,否则babel会在rollup处理之前，把模块转移成commonjs风格，导致tree-shake失败
        runtimeHelpers: true,
        // plugins: ['@babel/plugin-transform-runtime']
        plugins: [
          [
            "@babel/transform-runtime",
            {
              corejs: 2
            }
          ]
        ],
      })
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || packageName
    }
  };
  return config;
}

exports.getAllBuilds = () => Object.keys(builds).map(getConfig);
