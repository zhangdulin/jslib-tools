/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-09-09 11:26:20
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-09-09 11:26:21
 * @Description: 
 */
/*
 * @Author: zhangyu
 * @Date: 2021-05-18 18:22:28
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-09-09 11:13:07
 * @Description:  创建websocket对象
 */

import { isJSONStringify } from '../../judgement/index';

/**
 * @description: 建立websocket连接函数
 * @param {*} wsUrl 连接地址
 * @param {*} event 回调函数
 * @param {*} onmessage 回调函数里事件监听 消息
 * @param {*} onclose 回调函数里事件监听 关闭
 * @param {*} onerror 回调函数里事件监听 错误
 * @return {*} socket
 */
function CreateWebsocket({ wsUrl, event: { onopen, onmessage, onclose, onerror } }) {
  this.wsUrl = wsUrl;
  this.onopen = onopen;
  this.onmessage = onmessage;
  this.onclose = onclose;
  this.onerror = onerror;

  // 保存websocket对象
  this.socket = '';
  // reConnect函数节流标识符
  this.flag = true;
  // 记录ws失败信息
  this.socketErrorInfo = {
    times: 0, // 次数
    limit: 5 // 限制 超出限制业务处理
  };
  this.heartConfig = {
    timeOut: 1000 * 60 * 3, // 3分钟心跳一次
    timeObj: null,
    serverTimeObj: null
  };

  this.init();
}
// 重连函数
// 因为重连函数会被socket事件频繁触发，所以通过函数节流限制重连请求发送
CreateWebsocket.prototype.init = function() {
  // this.onopen = this.onopen || onopen;
  // this.onmessage = this.onmessage || onmessage;
  // this.onclose = this.onclose || onclose;
  // this.onerror = this.onerror || onerror;

  // 兼容性检验
  if (typeof WebSocket == 'undefined') {
    console.log('您的浏览器不支持WebSocket, 请使用主流浏览器访问页面，如Chrome浏览器');
  } else {
    // console.log('您的浏览器支持WebSocket');
  }
  // 设置 host
  const socketUrl = `${this.wsUrl}`;
  try {
    // 实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
    this.socket = new WebSocket(socketUrl);
    // 对WebSocket各种事件进行监听
    this.socket.onopen = e => {
      this.onopen && this.onopen(e, this.socket);
      // 重置心跳机制
      this.heart();
    };
    this.socket.onmessage = e => {
      // console.log('推送消息: ' + e.data);

      // 接收信息类型判断 消息判断需重新定义 20210604
      // if (e.data == 'yxj-living') {
      //     console.log('hey man i am living');
      // } else if (e.data == 'connected') {
      //     console.log('已连接');
      // } else {
      //     console.log('推送消息: ' + e.data);
      // }

      let data = {};
      // 过滤字符串
      if (isJSON(e.data)) {
        data = { data: JSON.parse(e.data) };
      } else {
        console.log('收到不能转换对象的字符串');
      }

      this.onmessage && this.onmessage(data, this.socket);

      this.socketErrorInfo.times = 0;

      // 通过event.data获取server发送的信息
      // 对数据进行操作
      // console.log(event.data);
      // 收到消息表示连接正常，所以重置心跳机制
      this.heart();
    };
    this.socket.onclose = e => {
      // console.log(e, 'socket-onclose');
      this.onclose && this.onclose(e, this.socket);
      this.reConnect();
    };
    this.socket.onerror = e => {
      // 报错+重连
      // console.log(e, 'socket-onerror');
      this.onerror && this.onerror(e, this.socket);
      this.reConnect();
    };

    return this.socket;
  } catch (e) {
    // 进行重连;
    // console.log('websocket连接错误');
    this.reConnect();
  }
};

// 重连函数
// 因为重连函数会被socket事件频繁触发，所以通过函数节流限制重连请求发送
CreateWebsocket.prototype.reConnect = function() {
  if (!this.flag) {
    return;
  }

  // 重连超过5次 提示用户网络异常
  if (this.socketErrorInfo.times && this.socketErrorInfo.times > this.socketErrorInfo.limit) {
    this.socketErrorInfo.times = 0;

    console.log('您当前网络环境差');
  }

  this.flag = false;
  setTimeout(() => {
    this.init();
    this.flag = true;
    this.socketErrorInfo.times++;
  }, 3000);
};

// 心跳机制
CreateWebsocket.prototype.heart = function() {
  // 清除延时器
  this.heartConfig.timeObj && clearTimeout(this.heartConfig.timeObj);
  this.heartConfig.serverTimeObj && clearTimeout(this.heartConfig.serverTimeObj);
  this.heartConfig.timeObj = setTimeout(() => {
    this.socket.send('yxj-islive'); // 发送消息，服务端返回信息，即表示连接良好，可以在socket的onmessage事件重置心跳机制函数
    // 定义一个延时器等待服务器响应，若超时，则关闭连接，重新请求server建立socket连接
    this.heartConfig.serverTimeObj = setTimeout(() => {
      this.socket.close();
      this.reConnect();
    }, this.heartConfig.timeOut);
  }, this.heartConfig.timeOut);
};

export default CreateWebsocket;
