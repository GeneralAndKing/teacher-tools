<template lang="pug">
  #app
    TheTitle
    Row.gak-scroll.gak-text-left#gak-body
      Col(span="14") a
      Col#gak-body-right(span="10")
        Split(v-model="split", mode="vertical")
          #gak-body-right-top(slot="top").gak-scroll
            template(v-for="content in contents")
              .gak-content-head(:class="{ 'gak-content-self': content.username === username }")
                | {{ content.username }}&nbsp;&nbsp;{{ content.date }}&nbsp;&nbsp;(ip:{{ content.ip }})
              .gak-content-body {{ content.data }}
          #gak-body-right-bottom(slot="bottom").gak-scroll
            Input(v-model="chatContent", type="textarea", :autosize="{minRows: 4,maxRows: 4}", placeholder="Enter something...")
            #gak-body-right-bottom-btn
              Button(type="primary", ghost, @click="reset")
                | 重置
              Button(type="info", ghost, @click="send")
                | 发送
</template>

<script>
import TheTitle from 'common@/components/the-title'
import TheMessage from 'communication@/components/the-message'
import TheScreen from 'communication@/components/the-screen'
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      split: 0.75,
      username: 'teacher',
      chatContent: ''
    }
  },
  components: {
    TheTitle,
    TheMessage,
    TheScreen
  },
  computed: {
    ...mapState([
      'online',
      'contents'
    ])
  },
  mounted: function () {

  },
  sockets: {
    clientCount (count) {
      console.log(count)
    }
  },
  methods: {
    handleVoice: function () {
      this.$socket.emit('voice')
    },
    reset: function () {
      this.chatContent = ''
    },
    send: function () {
      //
    }
  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

  #gak-body {
    margin-top: @gak-title-height;
    padding: 5px;
    #gak-body-right {
      height: calc(100% - @gak-title-height);
      overflow-y: auto;
      #gak-body-right-top {
        .gak-content-head {
          font-size: @gak-text-normal - 5px;
          color: cornflowerblue;
        }
        .gak-content-body {
          font-size: @gak-text-normal - 10px;
          color: black;
        }
        .gak-content-self {
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
      }
    }
  }
}
</style>
