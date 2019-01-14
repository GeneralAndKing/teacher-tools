<template lang="pug">
</template>
<script>
const { ipcRenderer } = require('electron')
export default {
  name: 'TheMessage',
  props: {},
  data () {},
  mounted: function () {
    ipcRenderer.on('closeWebServer', (event, arg) => {
      console.log('测试')
    })
    ipcRenderer.on('compress', message => {
      console.log('测试')
    })
  }
}
</script>
