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
* {
  transition: all 0.5s;
}
.gak-title-btn {
  -webkit-app-region: no-drag;
  width: @gak-title-height * 1.2;
  font-size: 20px;
  color: @gak-text-color-no-active;
  text-align: center;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(107, 106, 106);
    color: @gak-text-color-active;
  }
}
#close {
  &:hover{
    background: red;
  }
}
</style>
