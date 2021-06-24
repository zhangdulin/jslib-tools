/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-21 20:09:32
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-24 15:06:43
 * @Description: 
 */
/**
 *  获得UUId
 */
export function getUUID() {
  let d: number = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};

/**
 * html -> body 增加 <script src=[...]></script>
 *
 * @export 
 * @param {string} src
 * @param {(Function | undefined)} cb
 */
export function appendJs(src: string, cb: Function | undefined) {
  const script: any = document.createElement('script')
  script.src = src
  script.onload = cb
  document.body.appendChild(script)
}