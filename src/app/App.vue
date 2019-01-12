<template lang="pug">
  #app
    TheTitle
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

</template>

<script>
import HelloWorld from 'app@/components/HelloWorld.vue'
import TheTitle from 'common@/components/the-title'
import TheMessage from 'app@/components/The-Message'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TheTitle,
    TheMessage
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #gak-body {
    padding-top: 25px;
  }
}
</style>
