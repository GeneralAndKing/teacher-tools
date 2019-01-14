<template lang="pug">
  .home
    img(alt='Vue logo', src='../../common/assets/logo.png')
    HelloWorld(msg='Welcome to Your Vue.js App')
    HelloWorld(msg='Welcome to Your Vue.js App')

</template>

<script>
import HelloWorld from 'common@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
