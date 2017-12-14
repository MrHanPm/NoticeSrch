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
        <yd-input slot="right" v-model="val.model" 
          :show-clear-icon="false"
          :show-success-icon="false"
          :show-error-icon="false"
          placeholder="例：SC5023XXYMA5CNG"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车品牌</span>
        <yd-input slot="right" v-model="val.brand"
          :show-success-icon="false" 
          :show-clear-icon="false" 
          :show-error-icon="false" 
          placeholder="例：解放"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">车辆类型</span>
        <yd-input slot="right" v-model="val.protype" 
        :show-clear-icon="false" 
        :show-success-icon="false" 
        :show-error-icon="false" 
        placeholder="例：牵引车"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">底盘型号</span>
        <yd-input slot="right" v-model="val.chassis" 
          :show-clear-icon="false" 
          :show-success-icon="false" 
          :show-error-icon="false" 
          placeholder="例：CGC1140HDE44E"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">轴数</span>
        <yd-input slot="right" v-model="val.zhoushu" 
        type="tel" max="2" 
        :show-clear-icon="false" 
        :show-success-icon="false" 
        :show-error-icon="false" 
        placeholder="例：2"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">轴距范围</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.zhouju1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：2500"></yd-input>
          <span>到</span>
          <yd-input v-model="val.zhouju2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：3500"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">总质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.totalweight1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：7200"></yd-input>
          <span>到</span>
          <yd-input v-model="val.totalweight2" type="tel" max="4"
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：7200"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">排放标准</span>
        <select slot="right" :value="val.pfstd">
          <option value="">请选择</option>
          <option value="1">男</option>
          <option value="2">女</option>
          <option value="3">未知</option>
        </select>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">燃料种类</span>
        <yd-input slot="right" v-model="val.fueltype"
          :show-clear-icon="false" 
          :show-success-icon="false" 
          :show-error-icon="false" 
          placeholder="例：燃油"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <div class="lisd-title">更多查询条件</div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">生产地址</span>
        <yd-input slot="right" v-model="val.address" 
          :show-clear-icon="false" 
          :show-success-icon="false" 
          :show-error-icon="false" 
          placeholder="例：内蒙古"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">企业名称</span>
        <yd-input slot="right" v-model="val.factory" 
          :show-clear-icon="false" 
          :show-success-icon="false" 
          :show-error-icon="false" 
          placeholder="例：锡柴CA6DM2-39E4"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">发动机</span>
        <yd-input slot="right" v-model="val.engine" 
          :show-clear-icon="false" 
          :show-success-icon="false" 
          :show-error-icon="false" 
          placeholder="例：JL473QD"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">批次范围</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.pcsn1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：250"></yd-input>
          <span>到</span>
          <yd-input v-model="val.pcsn2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：2500"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">最高车速</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.maxrate1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：80"></yd-input>
          <span>到</span>
          <yd-input v-model="val.maxrate2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：7200"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">额定载客</span>
        <yd-input slot="right" v-model="val.peoplenum" type="tel" max="2" 
          :show-clear-icon="false" 
          :show-success-icon="false" 
          :show-error-icon="false" 
          placeholder="例：4"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">其他查询</span>
        <yd-input slot="right" v-model="val.remarks" 
          :show-clear-icon="false" 
          :show-success-icon="false" 
          :show-error-icon="false" 
          placeholder="例：该车仅选用4500mm轴距底盘"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整备质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.zbweight1" type="tel" max="4"
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：7200"></yd-input>
          <span>到</span>
          <yd-input v-model="val.zbweight2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：7200"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车长度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.trucklength1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：5000"></yd-input>
          <span>到</span>
          <yd-input v-model="val.trucklength2" type="tel" max="5" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：10000"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">箱体长度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.boxlength1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：2000"></yd-input>
          <span>到</span>
          <yd-input v-model="val.boxlength2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：4000"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">额定质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.edweight1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：1500"></yd-input>
          <span>到</span>
          <yd-input v-model="val.edweight2" type="tel" max="5" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：32000"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车宽度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.truckwidth1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：1000"></yd-input>
          <span>到</span>
          <yd-input v-model="val.truckwidth2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：2000"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">箱体宽度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.boxwidth1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：1000"></yd-input>
          <span>到</span>
          <yd-input v-model="val.boxwidth2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：2000"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车高度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.truckheight1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：1000"></yd-input>
          <span>到</span>
          <yd-input v-model="val.truckheight2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：5000"></yd-input>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">箱体高度</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <yd-input v-model="val.boxheight1" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：400"></yd-input>
          <span>到</span>
          <yd-input v-model="val.boxheight2" type="tel" max="4" 
            :show-success-icon="false" 
            :show-clear-icon="false" 
            :show-error-icon="false" 
            placeholder="例：2000"></yd-input>
        </div>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>
export default {
  name: 'NoticeBox',
  data () {
    return {
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
    val: {
      handler (newVal, oldVal) {
        this.$emit('setVal', newVal)
      },
      deep: true
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
