<template>
  <div class="notice-box">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">示例公告</span>
        <span slot="right" class="shili">
          CA1454545 >>
        </span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车型号</span>
        <div slot="right">
          <input type="text" v-model="val.model" 
            placeholder="例：SC5023XXYMA5CNG"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车品牌</span>
        <div slot="right">
          <input type="text" v-model="val.brand" 
            placeholder="例：解放"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">车辆类型</span>
        <div slot="right">
          <input type="text" v-model="val.protype" 
            placeholder="例：牵引车"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">底盘型号</span>
        <div slot="right">
          <input type="text" v-model="val.chassis" 
            placeholder="例：CGC1140HDE44E"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">轴数</span>
        <div slot="right">
          <input type="tel" max="2" v-model="val.zhoushu" 
            placeholder="例：2"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">轴距范围</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zhouju1" 
              placeholder="例：2500"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zhouju2" 
              placeholder="例：3500"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">总质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.totalweight1" 
              placeholder="例：7200"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.totalweight2" 
              placeholder="例：7200"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">排放标准</span>
        <select slot="right" v-model="val.pfstd">
          <option value="">请选择</option>
          <option value="1">男</option>
          <option value="2">女</option>
          <option value="3">未知</option>
        </select>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">燃料种类</span>
        <div slot="right">
          <input type="text" v-model="val.fueltype" 
            placeholder="例：燃油"
            autocomplete="off">
        </div>
      </yd-cell-item>
    </yd-cell-group>
    <div class="lisd-title">更多查询条件</div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">生产地址</span>
        <div slot="right">
          <input type="text" v-model="val.address" 
            placeholder="例：内蒙古"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">企业名称</span>
        <div slot="right">
          <input type="text" v-model="val.factory" 
            placeholder="例：锡柴CA6DM2-39E4"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">发动机</span>
        <div slot="right">
          <input type="text" v-model="val.engine" 
            placeholder="例：JL473QD"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">批次范围</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.pcsn1" 
              placeholder="例：250"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.pcsn2" 
              placeholder="例：2500"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">最高车速</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.maxrate1" 
              placeholder="例：80"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.maxrate2" 
              placeholder="例：7200"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">额定载客</span>
        <div slot="right">
          <input type="tel" max="2" v-model="val.peoplenum" 
            placeholder="例：4"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">其他查询</span>
        <div slot="right">
          <input type="text" v-model="val.remarks" 
            placeholder="例：该车仅选用4500mm轴距底盘"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整备质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zbweight1" 
              placeholder="例：7200"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zbweight2" 
              placeholder="例：7200"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车长度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.trucklength1" 
              placeholder="例：5000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.trucklength2" 
              placeholder="例：10000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">箱体长度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.boxlength1" 
              placeholder="例：2000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.boxlength2" 
              placeholder="例：4000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">额定质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.edweight1" 
              placeholder="例：1500"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="5" v-model="val.edweight2" 
              placeholder="例：32000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车宽度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.truckwidth1" 
              placeholder="例：1000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.truckwidth2" 
              placeholder="例：2000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">箱体宽度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.boxwidth1" 
              placeholder="例：1000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.boxwidth2" 
              placeholder="例：2000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车高度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.truckheight1" 
              placeholder="例：1000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.truckheight2" 
              placeholder="例：5000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">箱体高度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.boxheight1" 
              placeholder="例：400"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.boxheight2" 
              placeholder="例：2000"
              autocomplete="off">
          </div>
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
        model: '',
        brand: '',
        protype: '',
        chassis: '',
        zhoushu: '',
        zhouju1: '',
        zhouju2: '',
        totalweight1: '',
        totalweight2: '',
        pfstd: '',
        fueltype: '',
        address: '',
        factory: '',
        engine: '',
        pcsn1: '',
        pcsn2: '',
        maxrate1: '',
        maxrate2: '',
        peoplenum: '',
        remarks: '',
        zbweight1: '',
        zbweight2: '',
        trucklength1: '',
        trucklength2: '',
        boxlength1: '',
        boxlength2: '',
        edweight1: '',
        edweight2: '',
        truckwidth1: '',
        truckwidth2: '',
        boxwidth1: '',
        boxwidth2: '',
        truckheight1: '',
        truckheight2: '',
        boxheight1: '',
        boxheight2: ''
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
