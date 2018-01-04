<template>
  <yd-layout>
    <yd-navbar v-if="isIco" slot="navbar" :title="vTitle" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>
    <div class="g-scr-box">
      <yd-slider v-if="isSlider" autoplay="5000">
        <yd-slider-item v-for="(em, index) in picture" :key="index">
          <img :src="em" onerror="this.onerror=null;this.src='https://s.kcimg.cn/gonggao/default90.jpg';">
        </yd-slider-item>
      </yd-slider>
      <div class="m-name">{{zcDetail.model}}{{zcDetail.brand}}{{zcDetail.protype}}</div>
      <div class="flex-wrap row-flex tab-box">
        <div :class="{'active': cutTab === 0 }"
          v-if="zcEngine"
          @click.stop="cuts(0)">整车参数详情</div>
        <div :class="{'active': cutTab === 1 }"
          v-if="dpDetail"
          @click.stop="cuts(1)">底盘参数</div>
        <div :class="{'active': cutTab === 2 }"
          v-if="ranYouDetail"
          @click.stop="cuts(2)">燃油</div>
      </div>
      <vehicle-box v-if="cutTab === 0" :val="zcDetail" :tbl="zcEngine"></vehicle-box>
      <chassis-box v-if="cutTab === 1" :val="dpDetail" :tbl="dpEngine"></chassis-box>
      <fuel-box v-if="cutTab === 2" :val="ranYouDetail" :tbl="zcDetail.model"></fuel-box>
      <v-loading :show="isLod"></v-loading>
    </div>
  </yd-layout>
</template>

<script>
import XHR from '@/api/service'
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
      isIco: true,
      vTitle: '公告查询详情',
      cutTab: 0,
      isSlider: false,
      isLod: true,

      zcDetail: {},       // 整车参数部分
      picture: [],        // 图片部分
      zcEngine: [],       // 整车发动机模块
      ranYouDetail: {},   // 燃油模块
      dpDetail: {},       // 底盘模块详情参数
      dpEngine: []       // 底盘发动机模块
    }
  },
  created () {
    let URL = localStorage.getItem('URL')
    this.$dialog.backtop({num: 6})
    if (this.$route.query.s) {
      this.vTitle = '新能源查询详情'
    }
    if (this.isApp()) {
      this.isIco = false
      if (this.$route.query.s) {
        this.NMT('新能源查询详情')
      } else {
        this.NMT('公告查询详情')
      }
    }
    XHR.getMsg(URL).then(res => {
      if (res.data.status === 1) {
        if (res.data.picture) {
          this.picture = res.data.picture
          this.isSlider = true
        }
        this.zcDetail = res.data.zcDetail
        this.zcEngine = res.data.zcEngine
        this.ranYouDetail = res.data.ranYouDetail
        this.dpDetail = res.data.dpDetail
        this.dpEngine = res.data.dpEngine
        this.isLod = false
      } else {
        this.$dialog.notify({
          mes: '请求数据异常',
          timeout: 3000,
          callback: () => {}
        })
      }
    }).catch(err => {
      console.log(err)
    })
  },
  mounted () {
    let DOM = document.querySelector('.g-scr-box')
    DOM.addEventListener('scroll', () => {
      if (DOM.scrollTop > 1000) {
        this.$dialog.backtop({num: 0, box: 1})
      } else {
        this.$dialog.backtop({num: 6})
      }
      if (DOM.scrollHeight - DOM.offsetHeight - DOM.scrollTop < 14) {
        DOM.scrollTop = DOM.scrollHeight - 15
      }
    }, false)
  },
  methods: {
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
.slider-item img{
  width: 100%;
}

</style>
