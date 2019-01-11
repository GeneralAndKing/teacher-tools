<template lang="pug">
  #app
    img(src='./assets/logo.png')
    div
      p
        | web端
        code(v-text="'<Button>'")
        |         below
      Button(type='primary') Button
    HelloWorld(msg='Welcome to Your Vue.js App')

</template>

<script>
import HelloWorld from 'web_c/HelloWorld.vue'

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
