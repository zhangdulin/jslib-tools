/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-09 15:29:17
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-17 13:27:37
 * @Description:
 */

const path = require('path');
const shelljs = require('shelljs');
const program = require('commander');

const targetFile = path.resolve(__dirname, '../package.json');

const packagejson = require(targetFile);
const currentVersion = packagejson.version;
const versionArr = currentVersion.split('.');
const [mainVersion, subVersion, phaseVersion] = versionArr;

// 默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion + 1}`;

let newVersion = defaultVersion;

// 从命令行参数中取版本号
program
  .option('-v, --versions <type>', 'Add release version number', defaultVersion);

program.parse(process.argv);

if (program.versions) {
  newVersion = program.versions;
}

console.log('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile);

// npm run publish -- -v 0.0.2
// function publish() {
//   shelljs.sed('-i', '"name": "ktools"', '"name": "@kagol/ktools"', targetFile); // 修改包名
  shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile); // 修改版本号
//   shelljs.cd('dist');
// npm login --registry http://registry.npmjs.org
// npm unpublish jslib-tools@0.0.6 --force
  shelljs.exec('npm publish --registry http://registry.npmjs.org'); // 发布
  // shelljs.kill('SIGINT')

// }

// publish();
