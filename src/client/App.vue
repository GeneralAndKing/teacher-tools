<template lang="pug">
  #app
    TheTitle
    #gak-body
      //- TheScreen

</template>

<script>
import TheTitle from 'common@/components/the-title'
import TheMessage from 'client@/components/The-Message'
import TheScreen from 'client@/components/The-Screen'
export default {
  name: 'app',
  components: {
    TheTitle,
    TheMessage,
    TheScreen
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #gak-body {
    padding-top: 25px;
  }
}
</style>
