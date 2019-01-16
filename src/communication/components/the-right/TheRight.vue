<template lang="pug">
  Split(v-model="split", mode="vertical")
    .gak-scroll#gak-body-right-top(slot="top", ref="chat")
      template(v-for="content in contents")
        .gak-content-head(:class="{ 'gak-content-self': content.username === username, 'gak-content-teacher': content.username === 'teacher'}")
          | {{ content.username }}&nbsp;&nbsp;{{ content.date }}&nbsp;&nbsp;(ip:{{ content.ip }})
        .gak-content-body(v-html="content.msg")
    .gak-scroll#gak-body-right-bottom(slot="bottom")
      //- Input(v-model="chatContent", type="textarea", :autosize="{minRows: 4,maxRows: 4}", placeholder="Enter something...")
      .gak-scroll#gak-body-right-content(
        contenteditable="true",
        ref="chatContent",
        placeholder="Enter something...",
        @keyup.ctrl.enter="send",
        @keyup.ctrl.82="reset",
        @keyup.ctrl.69="expression=!expression",
        @keyup.ctrl.78="clean")
      #gak-body-right-bottom-btn.gak-no-select
        Tooltip.gak-float-left(content="ctrl+e", theme="light", placement="top-start")
          img.gak-expression(@click="expression=!expression", src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNzU4MmNhNS1hZjI1LWRjNDMtYTA2Yi1hMjY2ODVkOTkzMTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVDRjcxMDlDNkZBMTFFN0I4Q0ZBOUEzREQ2NTI3OTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVDRjcxMDhDNkZBMTFFN0I4Q0ZBOUEzREQ2NTI3OTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTMzNTMzMC0yNTA4LTMxNGQtYTJmYi0zMGQ0MjhlOTA2YzkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplY2UzMTNmOC1mNjZhLTExZTYtYmVi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")
        span.gak-float-left(style="line-height:35px") 当前在线：{{ clientCount }}
        baidu-expressions-picker.gak-text-left(
          v-show="expression",
          pickerClass="gak-picker",
          symbolClass="gak-symbol",
          :onSymbolClick="handleSymbolClick"
        )
        Tooltip(content="ctrl+n", theme="light", placement="top-end")
          Button(type="error", ghost, @click="clean")
            | 清屏
        Tooltip(content="ctrl+r", theme="light", placement="top-end")
          Button(type="primary", ghost, @click="reset")
            | 重置
        Tooltip(content="ctrl+Enter", theme="light", placement="top-end")
          Button(type="info", ghost, @click="send")
            | 发送

</template>

<script>
import { BaiduExpressionsPicker, BaiduExpressionsSymbol, isSymbol, SYMBOLS } from 'vue-expressions-baidu'
import getNowFormatDate from 'common@/lib/util'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      split: 0.75,
      username: 'teacher',
      chatContent: null,
      expression: false
    }
  },
  mounted: function () {
    this.chatContent = this.$refs.chatContent
    this.$nextTick(() => {
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
    })
  },
  watch: {
    contents () {
      this.$nextTick(() => {
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
      })
    }
  },
  computed: {
    ...mapState([
      'online',
      'contents',
      'clientCount'
    ])
  },
  methods: {
    ...mapMutations([
      'CLEAN_CONTENTS'
    ]),
    handleVoice: function () {
      this.$socket.emit('voice')
    },
    reset: function () {
      this.chatContent.innerHTML = ''
    },
    clean: function () {
      this.CLEAN_CONTENTS()
    },
    send: function () {
      const _this = this
      if (_this.chatContent.innerHTML.trim() === '') {
        this.chatContent.innerHTML = ''
        return
      }
      this.$socket.emit('sendMessage', {
        username: _this.username,
        date: getNowFormatDate(),
        msg: _this.chatContent.innerHTML,
        ip: '10.0.0.1'
      })
      this.reset()
    },
    handleSymbolClick (symbol) {
      const _this = this
      if (isSymbol(symbol)) {
        let img = document.createElement('img')
        img.setAttribute('src', SYMBOLS[symbol])
        img.setAttribute('draggable', false)
        _this.expression = false
        _this.chatContent.appendChild(img)
        _this.chatContent.focus()
      }
    }
  },
  components: {
    BaiduExpressionsPicker,
    BaiduExpressionsSymbol
  }
}
</script>

<style scoped lang="less">
#gak-body-right-top {
  border: solid 1px @gak-text-placeholder;
  padding: 5px;
  .gak-content-head {
    font-size: @gak-text-normal - 5px;
    color: cornflowerblue;
  }
  .gak-content-body {
    font-size: @gak-text-normal - 7px;
    color: black;
  }
  .gak-content-self {
    color: rgb(162, 0, 255);
  }
  .gak-content-teacher {
    color: red;
  }
}
#gak-body-right-bottom {
  #gak-body-right-bottom-btn {
    text-align: right;
    margin-top: 5px;
    button {
      margin-left: 15px;
    }
  }
  #gak-body-right-content {
    width: 100%;
    min-height: (@gak-text-normal / 1.5 + 6) * 5;
    max-height: 70%;
    font-size: @gak-text-normal / 1.5;
    overflow: auto;
    padding: 10px;
    color: black;
    border: solid 1px @gak-text-placeholder;
    transition: all 0.5s;
    -webkit-user-modify: read-write-plaintext-only;
    &:empty::before {
      content: attr(placeholder);
      color: @gak-text-placeholder;
    }
    &:focus {

    }
  }
  .gak-body-right-symbols {
    box-sizing: border-box;
    padding: 16px;
  }
}
</style>
