<template lang="pug">
  Drawer.gak-text-left#gak-side(placement="left", v-model="visible", @on-close="handleChangeVisible")
    Menu(active-name="1")
      template(v-for="item in menu")
        MenuItem(:name="item.name", :to="item.to")
          Icon(:type="item.icon")
          | {{ item.name }}
</template>

<script>
export default {
  name: 'TheSide',
  props: {
    menu: Array,
    default: []
  },
  data () {
    return {

    }
  },
  computed: {
    visible: {
      set: function () {
        //
      },
      get: function () {
        return this.$store.state.leftMenuVisible
      }
    }
  },
  methods: {
    handleChangeVisible: function () {
      this.$store.commit('SET_LEFT_MENU_VISIBLE')
    }
  }
}
</script>

<style lang="less">
.ivu-drawer-body {
  padding: 0;
  .ivu-menu {
    width: 100% !important;
  }
}

</style>
