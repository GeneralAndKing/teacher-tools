<template lang="pug">
  .home
    img(alt='Vue logo', src='../../common/assets/logo.png')
    helloworld(msg='Welcome to Your Vue.js App')

</template>

<script>
// @ is an alias to /src
import HelloWorld from 'app@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
