/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-22 09:05:29
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:09:39
 * @Description: 
 */

function isDOM(dom) {
  return (typeof HTMLElement === 'function')
    ? (dom instanceof HTMLElement)
    : (dom && (typeof dom === 'object') && (dom.nodeType === 1) && (typeof dom.nodeName === 'string'));
}

function pasteEvent(event) {
  //谷歌浏览器的的粘贴文件在这个对象下面
  if (event.clipboardData || event.originalEvent) {
    var clipboardData = (event.clipboardData || event.originalEvent.clipboardData);
    var items = clipboardData.items

    //获取文件的属性就在这里获取，打印该对象可以看到相关属性，结果的操作就在items里面，所以需要循环items
    let fileObj = null
    for (let i = 0; i < items.length; i++) {
      // (items[i].type.indexOf("image")  
      //getAsFile() 此方法只是该浏览器下才会有的方法 
      fileObj = items[i].getAsFile();
    }

    return fileObj
    // 第一种
    // 在上面的代码if处接着写
    // if(fileObj !== null) {
    //     var fileUrl=URL.createObjectURL(blob);
    //     document.getElementById("imgNode").src=fileUrl;
    // }
    // URL是一个公用的对象

    // 第二种方法是用base64的方法可以实现， 需要借助FileReader对象
    // var reader = new FileReader();
    // reader.onload = function (event) {
    //   //event.target.result 即为图片的Base64编码字符串
    //    var base64_str = event.target.result;
    //    document.getElementById("imgNode").src=base64_str;
    // }
    //  reader.readAsDataURL(blob);

  } else {
    return 'errpr-nonsupport'
  }
}

/**
 * @description: 获取黏贴内容 复制文本内容
 * @param {*} clipboardObj.getClipboardData 获取黏贴内容传参dom; clipboardObj.copyToClipBoard 复制传参字符串
 * @return {*} Boolean
 */
export const clipboardObj = {
  dom: '',
  value: '',
  getClipboardData(dom) {
    const domPaste = (dom && isDOM(dom)) || document.body
    domPaste && dom.addEventListener('paste', pasteEvent)
  },
  copyToClipBoard(value) {
    if (document.execCommand) {
      var x = document.createElement("INPUT");
      console.log(x)
      x.setAttribute("type", "text")
      x.value = value
      document.body.appendChild(x)
      x.select();
      document.execCommand("Copy");
      x.style.display = 'none';
      document.body.removeChild(x)
      return true;
    }
    if (window.clipboardData) {
      window.clipboardData.setData("Text", value);
      return true;
    }
    return false;
  }
}

/**
 * @description: 焦点相关功能函数
 * @param {*} focus：获取焦点 传入dom；insertAfterText：插入文本 传参dom 文本；getCursortPosition：获取光标位置 传参dom; setCaretPosition: 设置光标位置 传参dom 位置
 * @return {*} 
 */
export const cursortPosition = {
  textDom: '',
  value: '',
  focus(textDom) {
    if (window.getSelection) {
      // ie11 10 9 ff safari
      textDom.focus() // 解决ff不获取焦点无法定位问题
      const range = window.getSelection() // 创建range
      range.selectAllChildren(textDom) // range 选择textDom下所有子内容
      range.collapseToEnd() // 光标移至最后
    } else if (document.selection) {
      // ie10 9 8 7 6 5
      const range = document.selection.createRange() // 创建选择对象
      // var range = document.body.createTextRange();
      range.moveToElementText(textDom) // range定位到textDom
      range.collapse(false) // 光标移至最后
      range.select()
    } else {
      textDom.focus()
    }
  },
  // 插入文本
  insertAfterText(textDom, value) {
    var selectRange;
    // 文本长度
    var length = textDom.value && String(textDom.value+value).length || String(value).length
    if (document.selection) {
      // IE Support

      textDom.focus();

      selectRange = document.selection.createRange();

      selectRange.text = value;

      textDom.focus();

      this.setCaretPosition(textDom, length)
      return selectRange.text;
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
      // Firefox support

      const startPos = textDom.selectionStart;

      const endPos = textDom.selectionEnd;

      const scrollTop = textDom.scrollTop;

      textDom.value =
        textDom.value.substring(0, startPos) +
        value +
        textDom.value.substring(endPos, textDom.value.length);

      textDom.focus();

      textDom.selectionStart = startPos + value.length;

      textDom.selectionEnd = startPos + value.length;

      textDom.scrollTop = scrollTop;

      this.setCaretPosition(textDom, length)
      return textDom.value;
    } else {
      textDom.value += value;

      textDom.focus();

      this.setCaretPosition(textDom, length)
      return textDom.value;
    }
  },

  // 获取光标位置
  getCursortPosition(textDom) {
    var cursorPos = 0;

    if (document.selection) {
      // IE Support

      textDom.focus();

      const selectRange = document.selection.createRange();

      selectRange.moveStart('character', -textDom.value.length);

      cursorPos = selectRange.text.length;
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
      // Firefox support

      cursorPos = textDom.selectionStart;
    }

    return cursorPos;
  },

  // 设置光标位置
  setCaretPosition(textDom, pos) {
    if (textDom.setSelectionRange) {
      // IE Support

      textDom.focus();

      textDom.setSelectionRange(pos, pos);
    } else if (textDom.createTextRange) {
      // Firefox support

      const range = textDom.createTextRange();

      range.collapse(true);

      range.moveEnd('character', pos);

      range.moveStart('character', pos);

      range.select();
    }
  }
}
