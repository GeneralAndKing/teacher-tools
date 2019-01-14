<template lang="pug">
  Icon.gak-title-btn(v-bind:style="style", v-on:click="click", v-bind:type="icon", v-bind:id="type")

</template>

<script>
const { ipcRenderer: ipc } = require('electron')
const style = {
  min: {
  },
  max: {
  },
  close: {
  }
}
export default {
  name: 'TheTtitleButton',
  props: {
    type: {
      type: String,
      default: () => []
    },
    icon: {
      type: String,
      default: () => []
    }
  },
  data () {
    return {

    }
  },
  computed: {
    style: function () {
      return style[this.type]
    }
  },
  methods: {
    click: function () {
      ipc.send(this.type)
    }
  }
}
</script>

<style scoped lang="less">
#close {
  &:hover{
    background: @error-color;
  }
}
</style>
