<template lang="pug">
 Row#gak-title(align="middle")
  Col.gak-text-left(span="8") logo
  Col.gak-text-center(span="8") teacher-tools
  Col.gak-text-right(span="8")
    slot menu
    TheTitleButton(type="min", icon="ios-remove")
    TheTitleButton(type="max", icon="ios-browsers-outline")
    TheTitleButton(type="close", icon="ios-close")
</template>

<script>
import TheTitleButton from './TheTitleButton'
export default {
  name: 'TheTitle',
  props: {
    len: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {

    }
  },
  computed: {
    col: function () {
      let _this = this
      if (_this.len % 2 !== 0) {
        _this.len--
      }
      return (24 - _this.len) * 0.5
    }
  },
  components: {
    TheTitleButton
  }
}
</script>

<style scoped lang="less">
#gak-title {
  position: fixed;
  width: 100%;
  height: @gak-title-height;
  background-color: @primary-color;
  -webkit-app-region: drag;
  color: @gak-text-color-active;
  text-align: left;
  line-height: @gak-title-height;
}
</style>
