<template lang="pug">
  #app
    img(src='../common/assets/logo.png')
    div
      p
        | If iView is successfully added to this project, you'll see an
        code(v-text="'<Button>'")
        |         below
      Button(type='primary') Button
    HelloWorld(msg='Welcome to Your Vue.js App')

</template>

<script>
import HelloWorld from 'app@/components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
