<template lang="pug">
  #app
    TheTitle
    Row#gak-body
      Col(span="14") a
      Col(span="10") b

</template>

<script>
import TheTitle from 'common@/components/the-title'
import TheMessage from 'communication@/components/the-message'
import TheScreen from 'communication@/components/the-screen'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    TheTitle,
    TheMessage,
    TheScreen
  },
  computed: {
    ...mapState([
      'online'
    ])
  },
  mounted: function () {

  },
  sockets: {
    clientCount (count) {
      console.log(count)
    }
  },
  methods: {
    handleVoice: function () {
      this.$socket.emit('voice')
    }
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
    padding-top: @gak-title-height;
  }
}
</style>
