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
      <tr>
        <td rowspan="2">DFDJK34344</td>
        <td>配置1</td>
        <td>209</td>
        <td>水电费水电费</td>
      </tr>
      <tr>
        <td>配置1</td>
        <td>209</td>
        <td>水电费水电费</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      xhVal: ''
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
    min-height: 0.8rem;
    line-height: 0.8rem;
    vertical-align: middle;
    background: #fff;
  }
  td{
    min-height: 0.8rem;
    border-right:0.02rem solid #eaeaea;
    border-bottom:0.02rem solid #eaeaea;
  }
  td:last-child{border-right:0;}
  .w{background:#f6f6f6;}
}

</style>
