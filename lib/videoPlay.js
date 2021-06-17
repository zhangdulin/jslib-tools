/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-11 14:27:40
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-15 10:48:26
 * @Description: 
 */

// chrom浏览器禁止自动播放 video标签添加muted属性静音可以自动：
// android h5 webview
// android 4.2 webview添加了是否需要用户手势去触发音视频的播放开关，默认为true(需要用户手势触发)。
// 将webview的这个开关设置为不需要用户触发：
// mWebview.getSettings().setMediaPlaybackRequiresUserGesture(false);
// IOS h5 webview
// IOS APP给webview设置mediaPlaybackRequiresUserAction后可以允许自动播放.
/**
 * @description: 设置video 自动播放 
 * @param {*} id video的dom的id
 * @return {*}
 */
export function setVideoPlay(id) {  
    /**video.play()返回一个promise，未禁止则resolve，禁止则reject**/
    let video = document.getElementById(id);
    video.addEventListener('ended', () => { //结束
      console.log("播放结束")
      // this.$bridgePromise.closeWebView()
    }, false);
    video.muted = false; // 设置有音
    let videoPlay = video.play();
 
    // document.body.addEventListener('mousedown', function () {
    //   video.muted = false;
    // }, false);
 
    videoPlay.then(() => {
      console.log('可以自动播放');
    }).catch((err) => {
      console.log(err);
      console.log("不允许自动播放");
 
      //视频元素可以选择静音后再播放,提示用户打开声音
      video.muted = true;
      // video.play();
 
      video.onloadedmetadata = function () {
        video.muted = false;
        video.play()
      }
      video.load() // 重新
    })
      //也可以在用户交互后调用.play()
      // ...
}