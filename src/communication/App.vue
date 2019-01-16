<template lang="pug">
  #app
    TheTitle
    Row.gak-scroll.gak-text-left#gak-body
      Col#gak-body-left(span="14")
        TheLeft
      Col#gak-body-right(span="10")
        TheRight
</template>

<script>
import TheTitle from 'common@/components/the-title'
import TheRight from 'communication@/components/the-right'
import TheLeft from 'communication@/components/the-left'
export default {
  name: 'app',
  data () {
    return {
      //
    }
  },
  components: {
    TheTitle,
    TheRight,
    TheLeft
  },
  methods: {
    //
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
    }
  }
}
</style>
