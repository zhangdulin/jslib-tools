/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-28 09:47:26
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-01 14:22:36
 * @Description: 创建websocket对象
 */

import { isJSONStringify } from '@/judgement/index';

/**
  * @description: 建立websocket连接函数
  * @param {*} wsUrl 连接地址
  * @param {*} event 回调函数
  * @param {*} onmessage 回调函数里事件监听 消息
  * @param {*} onclose 回调函数里事件监听 关闭
  * @param {*} onerror 回调函数里事件监听 错误
  * @return {*} create() => socket
  */
export default {
  // 保存websocket对象
  socket: null,
  // websocket 参数
  websocketInfo: null,
  // reConnect函数节流标识符
  flag: true,
  // 记录ws失败信息
  socketErrorInfo: {
    times: 0, // 次数
    limit: 5 // 限制 超出限制业务处理
  },
  timeOut: 1000 * 60 * 3, // 3分钟心跳一次
  timeObj: null,
  serverTimeObj: null,
  // 心跳机制
  heart() {
    console.log('******ws heart beat******');
    const self = this;
    // 清除延时器
    this.timeObj && clearTimeout(this.timeObj);
    this.serverTimeObj && clearTimeout(this.serverTimeObj);
    this.timeObj = setTimeout(function () {
      self.socket.send('yxj-islive'); // 发送消息，服务端返回信息，即表示连接良好，可以在socket的onmessage事件重置心跳机制函数
      // 定义一个延时器等待服务器响应，若超时，则关闭连接，重新请求server建立socket连接
      self.serverTimeObj = setTimeout(function () {
        self.socket.close();
        self.reConnect();
      }, self.timeOut);
    }, this.timeOut);

  },
  // 重连函数
  // 因为重连函数会被socket事件频繁触发，所以通过函数节流限制重连请求发送
  reConnect() {
    if (!this.flag) {
      return;
    }
    // 重连超过5次 提示用户网络异常
    if (this.socketErrorInfo.times && this.socketErrorInfo.times > this.socketErrorInfo.limit) {
      this.socketErrorInfo.times = 0;
      alert('您当前网络环境差');
    }

    this.flag = false;
    setTimeout(() => {
      this.create(this.websocketInfo);
      this.flag = true;
      this.socketErrorInfo.times++;
    }, 3000);
  },
  /**
   * @description: 建立websocket连接函数
   * @param {*} wsUrl 连接地址
   * @param {*} event 回调函数
   * @param {*} onmessage 回调函数里事件监听 消息
   * @param {*} onclose 回调函数里事件监听 关闭
   * @param {*} onerror 回调函数里事件监听 错误
   * @return {*} socket
   */
  create({ wsUrl, event: { onopen, onmessage, onclose, onerror } }) {
    // 兼容性检验
    if (typeof WebSocket == 'undefined') {
      console.log('您的浏览器不支持WebSocket, 请使用主流浏览器访问页面，如Chrome浏览器');

      alert('您的浏览器不支持接收消息, 请使用主流浏览器访问页面，如Chrome浏览器');
    } else {
      console.log('您的浏览器支持WebSocket');
    }

    // 储存参数
    this.websocketInfo = this.websocketInfo || arguments[0];

    // 根据环境设置 host
    const socketUrl = `${this.websocketInfo.wsUrl}`;
    try {
      // 实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
      this.socket = new WebSocket(socketUrl);
      // 对WebSocket各种事件进行监听
      this.socket.onopen = e => {
        onopen && onopen(e, this.socket);
        // 重置心跳机制
        this.heart();
      };
      this.socket.onmessage = e => {
        console.log('推送消息: ' + e.data);

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
        if (isJSONStringify(e.data)) {
          data = JSON.parse(e.data);
        } else {
          console.log('收到不能转换为对象的字符串');
        }

        e.data = data;
        onmessage && onmessage(e, this.socket);

        this.socketErrorInfo.times = 0;

        // 通过event.data获取server发送的信息
        // 对数据进行操作
        // console.log(event.data);
        // 收到消息表示连接正常，所以重置心跳机制
        this.heart();
      };
      this.socket.onclose = e => {
        console.log(e, 'socket-onclose');
        onclose && onclose(e, this.socket);
        this.reConnect();
      };
      this.socket.onerror = e => {
        // 报错+重连
        console.log(e, 'socket-onerror');
        onerror && onerror(e, this.socket);
        this.reConnect();
      };

      return this.socket;
    } catch (e) {
      // 进行重连;
      console.log('websocket连接错误');
      this.reConnect();
    }
  }
}



