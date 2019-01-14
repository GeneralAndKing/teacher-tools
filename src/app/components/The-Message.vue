<template lang="pug">
</template>
<script>
const { ipcRenderer } = require('electron')
export default {
  name: 'TheMessage',
  props: {},
  mounted: function () {
    ipcRenderer.on('closeWebServer', (event, arg) => {
    })
    ipcRenderer.on('compress', message => {
    })
  }
}
</script>
