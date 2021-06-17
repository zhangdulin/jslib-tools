// Karma configuration
// Generated on Mon Aug 13 2018 11:55:46 GMT+0800 (CST)
var webpack = require("webpack");
var path = require("path");

var  webpackConfig = {
  // mode: 'development',
  // entry: './src/index.js',
  // output: {
    // filename: '[name].js'
  // },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   loader: "@babel/preset-typescript",
      //   exclude: /node_modules/
      // },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          // options: {
          //   configFile: 'test/tsconfig.json'
          // }
        },
        exclude: [path.join(__dirname, 'node_modules')]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
}
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "chai"],
    
    // 定义测试和被测代码文件
    // list of files / patterns to load in the browser
    // files: ["src/index.js", "test/*.test.js"],
    
    // files: ['test/index.ts'],
    files: ["test/*.test.js","test/*.test.ts" ],

    // 配置预处理器，哪些文件需要统计测试覆盖率
    preprocessors: {
      // "./src/index.js": ["webpack", "sourcemap"],
      "./test/*.js": ["webpack"],
      "./test/*.ts": ["webpack"]
    },
    
    // 识别ts
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    

    // list of files / patterns to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      // stats: 'errors-only'
    },
    plugins: [
      "karma-chrome-launcher",
      "karma-phantomjs-launcher",
      "karma-phantomjs-shim",
      "karma-mocha",
      "karma-coverage",
      "karma-chai",
      "karma-babel-preprocessor",
      "karma-webpack",
      "karma-sourcemap-loader"
    ],
    client: {
      mocha: {
        opts: "test/mocha.opts"
      }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 激活覆盖率报告器
    reporters: ["progress", "coverage"],
    coverageReporter: {
      type: "lcov",
      dir: "coverage/",
      subdir: "."
      // Would output the results into: .'/coverage/'
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // , "Chrome"
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // reporters: ['nyan', 'coverage-istanbul'],
    // 動畫
    // nyanReporter: {
    //   renderOnRunCompleteOnly: true
    // }
  });
};
