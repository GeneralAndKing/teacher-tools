<template lang="pug">
 Affix
  Row#gak-title(align="middle")
    Col.gak-text-left(span="8")
      slot(name="left") logo
    Col.gak-text-center(span="8") teacher-tools
    Col.gak-text-right(span="8")
      slot(name="right")
      TheTitleButton(type="min", icon="ios-remove")
      TheTitleButton(type="max", icon="ios-browsers-outline")
      TheTitleButton(type="close", icon="ios-close")
</template>

<script>
import TheTitleButton from './TheTitleButton'
export default {
  name: 'TheTitle',
  data () {
    return {

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
  line-height: @gak-title-height;
  top: 0;
}
</style>
