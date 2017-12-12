<template>
  <div class="notice-box">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">车辆型号</span>
        <yd-input slot="right" v-model="xhVal" regex="bankcard" max="20" :show-success-icon="false" :show-clear-icon="false" :show-error-icon="false" placeholder="例：BJ5048XXYEV2"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">车辆类型</span>
        <yd-input slot="right" v-model="xhVal" regex="bankcard" max="20" :show-success-icon="false" :show-clear-icon="false" :show-error-icon="false" placeholder="例：纯电动厢式运输车"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">品牌名称</span>
        <yd-input slot="right" v-model="xhVal" regex="bankcard" max="20" :show-success-icon="false" :show-clear-icon="false" :show-error-icon="false" placeholder="例：福田"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">企业名称</span>
        <yd-input slot="right" v-model="xhVal" regex="bankcard" max="20" :show-success-icon="false" :show-clear-icon="false" :show-error-icon="false" placeholder="例：北汽福田汽车股份有限公司"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>
export default {
  name: 'NoticeBox',
  data () {
    return {
      xhVal: ''
    }
  }
}
</script>

<style lang="less" scoped>
.notice-box{
  margin-top:0.16rem;
  background: #fff;
  padding-bottom: 10px;
}

.shili{
  color: #1571E5; float: left; width:100%; font-size: 0.28rem;
}
.m-cell-box{
  margin-bottom:0;
}
.box-fw .m-input{
  -webkit-box-flex: 1;-moz-box-flex: 1;-ms-flex: 1;-webkit-flex: 1;flex: 1;overflow: hidden;
}
.box-fw span{
  display: block; padding:0 0.1rem; line-height: 1rem;
}
.lisd-title{
  font-size: 0.32rem;
  color:#000;
  height: 0.8rem;
  line-height: 0.8rem;
  font-weight: 500;
  padding-top: 0.08rem;
  padding-left:0.25rem;
  position: relative;
}
.lisd-title:before{
  content: '';
  width:0.06rem;
  height: 0.28rem;
  display: block;
  background: #1571E5;
  position: absolute;
  left: 0;
  top: 0.32rem;
}
</style>
