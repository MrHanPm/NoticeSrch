<template>
  <div class="notice-box">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">车辆型号</span>
        <div slot="right">
          <input type="text" v-model="val.modelNumber" 
            placeholder="例：BJ5048XXYEV2"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">车辆类型</span>
        <div slot="right">
          <input type="text" v-model="val.carName" 
            placeholder="例：纯电动厢式运输车"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">品牌名称</span>
        <div slot="right">
          <input type="text" v-model="val.brand" 
            placeholder="例：福田"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">企业名称</span>
        <div slot="right">
          <input type="text" v-model="val.companyName" 
            placeholder="例：北汽福田汽车股份有限公司"
            autocomplete="off">
        </div>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>
export default {
  props: {
    ret: Number
  },
  data () {
    return {
      oldVal: {},
      val: {
        modelNumber: '',
        carName: '',
        brand: '',
        companyName: ''
      }
    }
  },
  watch: {
    ret: 'regVal',
    val: {
      handler (newVal, oldVal) {
        this.$emit('setVal', newVal)
      },
      deep: true
    }
  },
  created () {
    this.oldVal = {...this.val}
  },
  methods: {
    regVal (nw, od) {
      this.val = {...this.oldVal}
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
.cell-right>div{display: flex;width: 100%;}
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
