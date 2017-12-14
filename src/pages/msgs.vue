<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="公告号查询详情" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>

    <yd-slider autoplay="5000">
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
      </yd-slider-item>
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
      </yd-slider-item>
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
      </yd-slider-item>
    </yd-slider>
    <div class="m-name">CA5250XXYP63K43 解放厢式运输车</div>
    <div class="flex-wrap row-flex tab-box">
      <div :class="{'active': cutTab === 0 }" @click.stop="cuts(0)">整车参数详情</div>
      <div :class="{'active': cutTab === 1 }" @click.stop="cuts(1)">底盘参数</div>
      <div :class="{'active': cutTab === 2 }" @click.stop="cuts(2)">燃油</div>
    </div>
    <vehicle-box v-if="cutTab === 0"></vehicle-box>
    <chassis-box v-if="cutTab === 1"></chassis-box>
    <fuel-box v-if="cutTab === 2"></fuel-box>
    <v-loading :show="isLod"></v-loading>
  </yd-layout>
</template>

<script>
import VehicleBox from '@/components/msg/vehicle'
import ChassisBox from '@/components/msg/chassis'
import FuelBox from '@/components/msg/fuel'
export default {
  name: 'Msgs',
  components: {
    VehicleBox,
    ChassisBox,
    FuelBox
  },
  data () {
    return {
      cutTab: 0,
      isLod: false
    }
  },
  methods: {
    sub () {
      this.$dialog.notify({
        mes: '5秒后自动消失，点我也可以消失！',
        timeout: 3000,
        callback: () => {
          console.log('我走咯！')
        }
      })
    },
    cuts (e) {
      this.cutTab = e
      // console.log(this.cutTab)
    }
  }
}
</script>

<style lang="less" scoped>
.m-name{
  height: 0.96rem;
  line-height: 0.96rem;
  background: #fff;
  font-size:0.32rem;
  padding: 0 0.24rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 0.02rem solid #f5f5f5;
}
.m-navbar:after{border-bottom: none;}
.tab-box{
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  background:#fff;
  div{
    flex:1;
    font-size: 0.28rem; 
    color: #5c6066;
    border-right:0.02rem solid #e9e9e9;
    box-sizing: border-box;
  }
  .active{
    color: #1571E5;
    font-weight: 500;
    border-bottom: 0.04rem solid #1571E5;
  }
}
.tab-box div:last-child{
  border-right:0;
}
</style>
