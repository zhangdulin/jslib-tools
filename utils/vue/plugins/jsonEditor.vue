<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
// 用法
// <JsonEditor
//   ref="refJsonEditor"
//   v-model="formData.json"
//   :read-only="false"
//   :autofocus="true"
//   @changed="onJsonChange"
//   @error="onError"
//   @changedjsonLarge="changedjsonLarge"
// />
import CodeMirror from 'codemirror'
require('script-loader!jsonlint')
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
import 'codemirror/addon/selection/active-line'
import 'codemirror/theme/monokai.css'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'

import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/sql-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/hint/xml-hint'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/hint/css-hint'
import 'codemirror/addon/hint/show-hint'

import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/mode/markdown/markdown.js'

import 'codemirror/addon/display/fullscreen.css'
import 'codemirror/addon/display/fullscreen.js'

import 'codemirror/addon/edit/matchbrackets.js'

import 'codemirror/addon/edit/matchbrackets.js'

// 搜索
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/match-highlighter.js'
import 'codemirror/addon/search/jump-to-line.js'

import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/search.js'

// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
export default {
  name: 'JsonEditor',
  props: {
    value: {
      type: [Object, String]
    },
    // 是否只读，默认否
    readOnly: {
      type: Boolean,
      default: false,
    },
    // 主题
    theme: {
      type: String,
      default: '',
    },
    // 自动聚焦
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      jsonEditor: null
    }
  },
  watch: {
    value (nv) {
      const editorValue = this.jsonEditor.getValue()
      if (nv !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(nv, null, 2))
      }
    }
  },
  mounted () {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'application/json', //编辑器语言
      // mode: { name: 'javascript', json: true }, //编辑器语言
      theme: this.theme || 'default', //编辑器主题 rubyblue default
      readOnly: this.readOnly ? 'nocursor' : false, //nocursor
      lineNumbers: true,
      smartIndent: true,
      lint: true,
      styleActiveLine: true,
      autofocus: this.autofocus, // 聚焦
      scrollbarStyle: 'simple', // simple overlay
      lineWiseCopyCut: true,
      lineWrapping: true, // 代码折叠
      foldGutter: true,
      matchBrackets: true, //括号匹配
      // gutters: ['CodeMirror-lint-markers', 'CodeMirror-foldgutter'],
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      extraKeys: { 'Ctrl': 'autocomplete' }, //ctrl可以弹出选择项 
    })

    // 全屏
    this.jsonEditor.setOption('extraKeys', {
      'F11': function (cm) {
        cm.setOption('fullScreen', !cm.getOption('fullScreen'))
        this.$emit('changedjsonLarge', !cm.getOption('fullScreen'))
      },
      'Esc': function (cm) {
        if (cm.getOption('fullScreen')) {
          cm.setOption('fullScreen', false)
          this.$emit('changedjsonLarge', falseS)
        }
      }
    })
    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
    this.jsonEditor.on('change', cm => {
      if (cm.state && cm.state.lint && cm.state.lint.marked.length) {
        this.$emit('changed', cm.getValue())
        this.$emit('error', cm.state.lint.marked)
      } else {
        this.$emit('changed', cm.getValue())
        this.$emit('input', cm.getValue())
      }
    })
    // this.jsonEditor.on('blur', cm => {
    //   this.jsonEditorBlur = true
    // })
    // this.jsonEditor.on('focus', cm => {
    //   this.jsonEditorBlur = false
    // })

    // this.jsonEditor.refresh();
  },
  methods: {
    getValue () {
      try {
        return this.jsonEditor.getValue()
      } catch (error) {
        this.$emit('error', error)
      }
    },
    largeJson () {
      this.jsonEditor && this.jsonEditor.setOption('fullScreen', true)
    },
    smallJson () {
      this.jsonEditor && this.jsonEditor.setOption('fullScreen', false)
    }
  }
}
</script>

<style scoped>
.json-editor {
  height: 100%;
  /* max-height: 600px;
  overflow-y: auto; */
  position: relative;
}
.json-editor >>> .CodeMirror {
  height: auto;
  min-height: 300px;
}
.json-editor >>> .CodeMirror-scroll {
  min-height: 300px;
  max-height: 800px;
}
.json-editor >>> .cm-s-rubyblue span.cm-string {
  color: #f08047;
}
.json-editor >>> span.cm-string {
  color: #f08047;
}
.json-editor >>> span.cm-property {
  color: #2c3e50;
}
</style>