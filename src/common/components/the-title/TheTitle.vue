<template lang="pug">
 Row#gak-title(align="middle")
  Col(span="11") logo
  Col(span="11") teacher-tools
  Col(span="2")
    TheTitleButton(type="min", icon="md-remove")
    TheTitleButton(type="max", icon="ios-browsers")
    TheTitleButton(type="close", icon="md-close")
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
  color: white;
  text-align: left;
}
</style>
