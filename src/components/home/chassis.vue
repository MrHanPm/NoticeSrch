<template>
  <div class="notice-box">
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">底盘型号</span>
        <div slot="right">
          <input type="text" v-model="val.dpxh" 
            placeholder="例：NJ6525DYC-X"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">底盘品牌</span>
        <div slot="right">
          <input type="text" v-model="val.cpsb" 
            placeholder="例：依维柯牌"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">底盘类别</span>
        <div slot="right">
          <input type="text" v-model="val.cpmc" 
            placeholder="例：客车底盘"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整备质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zbzl1" 
              placeholder="例：1000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zbzl2" 
              placeholder="例：3000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">总质量</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zzl1" 
              placeholder="例：3000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zzl2" 
              placeholder="例：10000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">轴数</span>
        <div slot="right">
          <input type="tel" max="4" v-model="val.zs" 
            placeholder="例：2"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">轴距范围</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zj1" 
              placeholder="例：2000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.zj2" 
              placeholder="例：5000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">排放标准</span>
        <select slot="right" v-model="val.pfsp">
          <option value="">请选择</option>
          <option value="1">男</option>
          <option value="2">女</option>
          <option value="3">未知</option>
        </select>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">燃料种类</span>
        <div slot="right">
          <input type="text" v-model="val.rlzl" 
            placeholder="例：柴油"
            autocomplete="off">
        </div>
      </yd-cell-item>
    </yd-cell-group>
    <div class="lisd-title">更多查询条件</div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">批次范围</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.pc1" 
              placeholder="例：296"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.pc2" 
              placeholder="例：299"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">发动机型号</span>
        <div slot="right">
          <input type="text" v-model="val.mfdj" 
            placeholder="例：SOFIM8140.43S5"
            autocomplete="off">
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车长</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.carleng1" 
              placeholder="例：5000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.carleng2" 
              placeholder="例：7200"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">发动机功率</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.mgl1" 
              placeholder="例：50"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.mgl2" 
              placeholder="例：150"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车宽</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.carW1" 
              placeholder="例：1000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.carW2" 
              placeholder="例：3000"
              autocomplete="off">
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">整车高</span>
        <div slot="right" class="flex-wrap row-flex box-fw">
          <div class="m-input">
            <input type="tel" max="4" v-model="val.carH1" 
              placeholder="例：1000"
              autocomplete="off">
          </div>
          <span>到</span>
          <div class="m-input">
            <input type="tel" max="4" v-model="val.carH2" 
              placeholder="例：3000"
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
      val: {
        dpxh: '',
        cpsb: '',
        cpmc: '',
        zbzl1: '',
        zbzl2: '',
        zzl1: '',
        zzl2: '',
        zs: '',
        zj1: '',
        zj2: '',
        pfsp: '',
        rlzl: '',
        pc1: '',
        pc2: '',
        mfdj: '',
        carleng1: '',
        carleng2: '',
        mgl1: '',
        mgl2: '',
        carW1: '',
        carW2: '',
        carH1: '',
        carH2: ''
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
.cell-right>div{display: flex;width: 100%;}
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
