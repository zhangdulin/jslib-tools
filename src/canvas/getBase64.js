/**
 * 获取图片的base64 url
 * @param {string} url 图片url
 * @returns {Promise} 图片base64信息
 */
 export function getImgBase64(url) {
  /* eslint-disable */
  var Img = new Image(),
    dataURL = "";
  Img.setAttribute("crossOrigin", "anonymous");
  Img.src = url;
  return new Promise((resolve, reject) => {
    Img.onload = function() {
      var canvas = document.createElement("canvas"),
        width = Img.width,
        height = Img.height;
      var ctx = canvas.getContext("2d");
      var scale = 1;
      ctx.scale(scale, scale);
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.drawImage(Img, 0, 0, width * scale, height * scale);

      // ctx.drawImage(img, 0, 0);
      // const dataURL = canvas.toDataURL(outputFormat);

      dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
  });
}

/**
 * @description: 获取图片的base64
 * @param {string} url 图片url
 * @returns {Promise} 图片base64信息
 */
export function getHttpBase64 (url) {
  const _this = this
  const imgUrl = url

  window.URL = window.URL || window.webkitURL;
  var xhr = new XMLHttpRequest();
  xhr.open('get', imgUrl, true);
  // 至关重要
  xhr.responseType = 'blob';
  xhr.send();
  return new Promise((resolve, reject)=>{
    xhr.onload = function () {
      if (this.status == 200) {
        // 得到一个blob对象
        var blob = this.response;
        // 至关重要
        const oFileReader = new FileReader();
        oFileReader.onloadend = function (e) {
          // 此处拿到的已经是 base64的图片了
          const base64 = e.target.result;
          resolve(base64)
        };
        oFileReader.readAsDataURL(blob);
        // ====为了在页面显示图片，可以删除====
        // var img = document.createElement('img');
        // img.onload = function (e) {
        //   window.URL.revokeObjectURL(img.src); // 清除释放
        // };
        // const src = window.URL.createObjectURL(blob);
        // img.src = src
  
        // console.log(src, 'oFileReader')
        // document.getElementById("container1").appendChild(img);
        // ====为了在页面显示图片，可以删除====
      }
    }
  })
}