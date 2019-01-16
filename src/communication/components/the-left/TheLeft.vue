<template lang="pug">
 Tabs
  TabPane(label="屏幕共享", icon="md-videocam")
    //- TheScreen
  TabPane(label="已加入学生", icon="md-checkmark-circle")
  TabPane(label="未加入学生", icon="md-alert")

</template>

<script>
import TheScreen from 'communication@/components/the-screen'

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    TheScreen
  }
}
</script>

<style scoped lang="less">
* {
  .gak-no-select;
}
</style>
