<template lang="pug">
  #app
    TheTitle
      template(slot="left")
        Icon.gak-title-btn(type="ios-list", @click="handleChangeLeftMenu")
      template(slot="right")
        Dropdown.gak-text-center(trigger="click")
          a(href="javascript:void(0)")
            Icon(type="md-person")
          DropdownMenu(slot="list")
            template(v-for="item in menu")
              DropdownItem {{ item.name }}
    TheMessage
    .gak-scroll#gak-body
      TheSide(:menu="leftMenu")
      img(src='../common/assets/logo.png')
      div
        p
          | If iView is successfully added to this project, you'll see an app
          code(v-text="'<Button>'")
          |         below
        Button(type='primary') Button
      HelloWorld(msg='Welcome to Your Vue.js App')
      HelloWorld(msg='Welcome to Your Vue.js App')
        h1 test

</template>

<script>
import TheTitle from 'common@/components/the-title'
import TheSide from 'common@/components/the-side'
import HelloWorld from 'app@/components/HelloWorld.vue'
import TheMessage from 'app@/components/The-Message'

export default {
  name: 'app',
  data () {
    return {
      menu: [
        {
          name: '登录'
        }, {
          name: '注册'
        }, {
          name: '设置'
        }, {
          name: '帮助'
        }, {
          name: '关于'
        }
      ],
      leftMenuVisable: false,
      leftMenu: [
        {
          name: '主页',
          to: 'about',
          icon: 'md-home'
        }, {
          name: '班级管理',
          to: 'about',
          icon: 'md-home'
        }, {
          name: '作业管理',
          to: 'about',
          icon: 'md-home'
        }, {
          name: '作业收取',
          to: 'about',
          icon: 'md-home'
        }, {
          name: '屏幕共享',
          to: 'about',
          icon: 'md-home'
        }, {
          name: '其它工具',
          to: 'about',
          icon: 'md-home'
        }

      ]
    }
  },
  components: {
    HelloWorld,
    TheTitle,
    TheMessage,
    TheSide
  },
  methods: {
    handleChangeLeftMenu: function () {
      this.$store.commit('SET_LEFT_MENU_VISIBLE')
    }
  }
}
</script>

<style lang="less">
* {
  -webkit-user-select:none;
}

html, body {
  overflow: hidden;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .ivu-dropdown-rel {
    -webkit-app-region: no-drag;
    transition: all 0.5s;
    text-align: center;
    .ivu-icon {
      color: @gak-text-color-no-active;
      font-size: 20px;
      width: @gak-title-height * 1.2;
      padding: 2px;
      &:hover{
        color: @gak-text-color-active;
      }
    }

    &:hover {
      background: rgb(107, 106, 106);
    }
  }
  #gak-body {
    margin-top: @gak-title-height;
    height: calc(100% - @gak-title-height);
  }
}
</style>
