<template lang="pug">
  .home
    img(alt='Vue logo', src='../assets/logo.png')
    helloworld(msg='Welcome to Your Vue.js App')

</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
