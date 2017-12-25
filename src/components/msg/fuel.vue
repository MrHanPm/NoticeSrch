<template>
  <div class="tx-box">
    <div class="tx-name">可查看下方不同配置的燃油公告详情</div>

    <table class="d-table">
      <tr class="w">
        <td>产品型号(车辆型号)</td>
        <td>车辆参数与配置查询</td>
        <td>产品名称</td>
        <td>企业名称</td>
      </tr>
      <tr v-for="(em, inx) in val" :key="inx"
        @click.stop="toRan(em.url, '/detail')">
        <td v-if="inx === 0" :rowspan="val.length">{{tbl}}</td>
        <td>配置{{inx + 1}}</td>
        <td>{{em.proName}}</td>
        <td>{{em.company}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  props: {
    val: Array,
    tbl: String
  },
  methods: {
    toRan (url, to) {
      localStorage.setItem('RYL', url)
      this.jump(to)
    }
  }
}
</script>

<style lang="less" scoped>
.tx-name{
  background:#eaeaea;
  height: 0.8rem; font-weight: bold;
  line-height: 0.8rem;
  padding:0 0.25rem;
  color: #F44336;
  font-size: 0.28rem;
}
.d-table{
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 0.28rem;
  tr{
    width: 100%;
    vertical-align: middle;
    background: #fff;
    border-bottom:0.02rem solid #eaeaea;
  }
  td{
    height: 0.8rem;
    border-right:0.02rem solid #eaeaea;
  }
  td:last-child{border-right:0;}
  .w{background:#f6f6f6;}
}

</style>
