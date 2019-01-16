<template lang="pug">
 Tabs
  TabPane(label="屏幕共享", icon="md-videocam")
    //- TheScreen
  TabPane.gak-scroll(label="已加入学生", icon="md-checkmark-circle")
    Alert(type="success", show-icon) 双击可以复制一行数据哦～
    Table(:height="tableHeight", stripe, :columns="tableHeader", :data="arrived", @on-row-dblclick="copyRow")
  TabPane(label="未加入学生", icon="md-alert")
    Alert(type="success", show-icon) 双击可以复制一行数据哦～
    Table(:height="tableHeight", stripe, :columns="tableHeader", :data="unarrived", @on-row-dblclick="copyRow")

</template>

<script>
import TheScreen from 'communication@/components/the-screen'

export default {
  data () {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
      tableHeight: 500,
      tableHeader: [
        {
          type: 'index',
          width: 50,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '学号',
          key: 'studentNo',
          align: 'center',
          sortable: true,
          sortType: 'asc',
          /**
           * 自定义排序
           */
          sortMethod: (a, b, type) => {
            if (type === 'desc') {
              return a.length === b.length ? b.localeCompare(a) : b.length - a.length
            } else {
              return a.length === b.length ? a.localeCompare(b) : a.length - b.length
            }
          }
        },
        {
          title: '性别',
          key: 'sex',
          align: 'center',
          sortable: true,
          /**
           * render 函数自定义列模板
           */
          render: (h, params) => {
            return params.row.sex === '男' ? h('Tag', {
              attrs: {
                color: 'blue'
              }
            }, '男') : h('Tag', {
              attrs: {
                color: 'magenta'
              }
            }, '女')
          }
        }
      ],
      arrived: [
        {
          name: '小花',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '小小翠',
          studentNo: '201601010105',
          sex: '女'
        },
        {
          name: '小利',
          studentNo: '201601010103',
          sex: '女'
        },
        {
          name: '小光',
          studentNo: '201601010104',
          sex: '男'
        },
        {
          name: '小火',
          studentNo: '201601010102',
          sex: '男'
        },
        {
          name: '小翠花',
          studentNo: '201601010111',
          sex: '女'
        },
        {
          name: '大力',
          studentNo: '201601010109',
          sex: '男'
        },
        {
          name: '小利',
          studentNo: '201601010141',
          sex: '女'
        },
        {
          name: '小光',
          studentNo: '201601010201',
          sex: '男'
        },
        {
          name: '小火',
          studentNo: '201601010202',
          sex: '男'
        },
        {
          name: '小翠花',
          studentNo: '201601010191',
          sex: '女'
        },
        {
          name: '大力',
          studentNo: '201601010181',
          sex: '男'
        },
        {
          name: '小利',
          studentNo: '201601010171',
          sex: '女'
        },
        {
          name: '小光',
          studentNo: '201601010152',
          sex: '男'
        },
        {
          name: '小火',
          studentNo: '201601010141',
          sex: '男'
        },
        {
          name: '小翠花',
          studentNo: '201601010121',
          sex: '女'
        },
        {
          name: '大力',
          studentNo: '201601010111',
          sex: '男'
        }
      ],
      unarrived: [
        {
          name: '小花',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '小小翠',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '小利',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '小光',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小火',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小翠花',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '大力',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小利',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '小光',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小火',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小翠花',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '大力',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小利',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '小光',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小火',
          studentNo: '201601010101',
          sex: '男'
        },
        {
          name: '小翠花',
          studentNo: '201601010101',
          sex: '女'
        },
        {
          name: '大力',
          studentNo: '201601010101',
          sex: '男'
        }
      ]
    }
  },
  watch: {
    screenWidth: function (val) {
    },
    screenHeight: function (val) {
      // 实时调整表格高度
      this.tableHeight = val - 150
    }
  },
  mounted () {
    const _this = this
    /**
     * 监听窗口变化
     */
    window.onresize = function () {
      _this.screenWidth = document.documentElement.clientWidth
      _this.screenHeight = document.documentElement.clientHeight
    }
    _this.screenHeight = document.documentElement.clientHeight
    _this.tableHeight = _this.screenHeight - 150
  },
  methods: {
    copyRow: function (row, index) {
      const _this = this
      let content = `姓名：${row.name}  学号：${row.studentNo}  性别：${row.sex}`
      _this.$copyText(content).then(function (e) {
        _this.$Message.success(`复制 ${row.name} 成功`)
      }, function (e) {
        _this.$Message.error('啊哦，复制失败了。。。')
      })
    }
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
.ivu-tabs-tabpane {
  -webkit-user-select: text;
}
</style>
