/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-18 10:18:51
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-18 10:24:28
 * @Description: 
 */
/**
 * @description: 加载高德地图
 * @param {*} p  数组 插件名称
 * @return {*}
 */
export default function AMaploader (p) {
  return new Promise((resolve, reject) => {
    const plugin = p && p.join(',') || ''
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      // 加载高德地图代码
      const id = 'gaode-map'
      const oldjs = document.getElementById(id);
      if (oldjs) oldjs.parentNode.removeChild(oldjs);
      const url = `https://webapi.amap.com/maps?v=1.4.15&plugin=${plugin}&key=${process.env.VUE_APP_MAPKEY}&callback=initAMap`
      const jsapi = document.createElement('script')
      jsapi.charset = 'utf-8'
      jsapi.src = url
      jsapi.id = id
      document.head.appendChild(jsapi)

      window.initAMap = () => {
        resolve(window.AMap)
      }
    }
  })
}

// 用法
// 引用
// import AMaploader from '*/AMap.js';
  // 同时引入工具条插件，比例尺插件和鹰眼插件
  // AMaploader([
  //   'AMap.ToolBar',
  //   'AMap.Scale',
  //   'AMap.Autocomplete',
  //   'AMap.PlaceSearch',
  //   'AMap.Geolocation',
  //   'AMap.Geocoder'
  // ]).then(
  //   AMap => {
  //     this.map = new AMap.Map('container', {
  //       resizeEnable: true, // 是否监控地图容器尺寸变化
  //       zoom: 14, // 设置地图显示的缩放级别
  //       // center: [], //设置地图中心点坐标
  //       viewMode: '2D', // 设置地图模式
  //       lang: 'zh_cn' // 设置地图语言类型
  //     });
  //     this.map.on('complete', () => {
  //       // 地图图块加载完成后触发
  //     });
  //     this.map.on('click', ev => {
  //       // 触发事件的对象
  //       // const target = ev.target
  //       // 触发事件的地理坐标，AMap.LngLat 类型 精度lng 纬度lat
  //       const lnglat = ev.lnglat;
  //       // 触发事件的像素坐标，AMap.Pixel 类型 x y
  //       // const pixel = ev.pixel
  //       // 触发事件类型
  //       // const type = ev.type

  //     });
  //     this.map.on('dragend', () => {
  //     });
  //     this.map.on('dragging', () => {
  //     });
  //     this.map.on('zoomend', e => {
  //       // 获取地图缩放级别
  //       console.log(e, 'zoomend');
  //     });
  //     this.map.addControl(new AMap.ToolBar());

  //     // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
  //     const scale = new AMap.Scale({
  //       offset: new AMap.Pixel(10, 20),
  //       position: 'RB'
  //     });
  //     this.map.addControl(scale);
  //     this.map.addControl(new AMap.PlaceSearch());

  //     // 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
  //     const geocoder = new AMap.Geocoder({
  //       radius: this.mapInfoDefault.radius // 范围，默认：500
  //     });
  //     this.map.addControl(geocoder);

  //     // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
  //     const geolocation = new AMap.Geolocation({
  //       // 是否使用高精度定位，默认：true
  //       enableHighAccuracy: true,
  //       // 设置定位超时时间，默认：无穷大
  //       timeout: 3000,
  //       // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
  //       convert: true,
  //       // 是否使用安卓定位sdk用来进行定位，
  //       useNative: true,
  //       // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
  //       buttonOffset: new AMap.Pixel(10, 20),
  //       //  定位按钮的排放位置,  RB表示右下
  //       buttonPosition: 'LB',
  //       showMarker: false, // 定位成功后在定位到的位置显示点标记，默认：true
  //       showCircle: false, // 定位成功后用圆圈表示定位精度范围，默认：true
  //       panToLocation: false, // 定位成功后将定位到的位置作为地图中心点，默认：true
  //       zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
  //     });
  //     // AMap.event.addListener(
  //     //   geolocation,
  //     //   'complete',
  //     //   _this.geolocationComplete
  //     // );
  //     // AMap.event.addListener(geolocation, 'error', console.log(e));
  //     this.map.addControl(geolocation);
  //   },
  //   e => {
  //     this.$toast.fail('地图加载失败！请重新进入页面');
  //     console.log(e);
  //   }
  // )