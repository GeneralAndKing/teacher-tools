<template lang="pug">
  #app
    TheTitle(:len="6")
      Dropdown(trigger="click", slot)
        a(href="javascript:void(0)")
          Icon(type="ios-list")
        DropdownMenu(slot="list")
          template(v-for="item in menu")
            DropdownItem {{ item.name }}
    TheMessage
    #gak-body
      img(src='../common/assets/logo.png')
      div
        p
          | If iView is successfully added to this project, you'll see an app
          code(v-text="'<Button>'")
          |         below
        Button(type='primary') Button
      HelloWorld(msg='Welcome to Your Vue.js App')
        h1 test

</template>

<script>
import HelloWorld from 'app@/components/HelloWorld.vue'
import TheTitle from 'common@/components/the-title'
import TheMessage from 'app@/components/The-Message'

export default {
  name: 'app',
  data () {
    return {
      menu: [
        {
          name: '登录'
        },
        {
          name: '注册'
        },
        {
          name: '设置'
        },
        {
          name: '帮助'
        },
        {
          name: '关于'
        }
      ]
    }
  },
  components: {
    HelloWorld,
    TheTitle,
    TheMessage
  }
}
</script>

<style lang="less">
* {
  -webkit-user-select:none;
   user-select:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
    padding-top: 25px;
  }
}
</style>
