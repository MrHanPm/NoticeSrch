<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="公告号查询" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
      <div slot="right" class="red-box">当前第345批</div>
    </yd-navbar>

    <div class="nav-tabbar flex-wrap row-flex">
      <div class="page" :class="{'active': cutTab === 0 }" @click.stop="cuts(0)">
        <img src="https://s.kcimg.cn/wap/images/saas/2.png">
        <p>公告查询</p>
      </div>
      <div class="page" :class="{'active': cutTab === 1 }" @click.stop="cuts(1)">
        <img src="https://s.kcimg.cn/wap/images/saas/1.png">
        <p>底盘查询</p>
      </div>
      <div class="page" :class="{'active': cutTab === 2 }" @click.stop="cuts(2)">
        <img src="https://s.kcimg.cn/wap/images/saas/4.png">
        <p>燃油查询</p>
      </div>
      <div class="page" :class="{'active': cutTab === 3 }" @click.stop="cuts(3)">
        <img src="https://s.kcimg.cn/wap/images/saas/3.png">
        <p>免征查询</p>
      </div>
      <div class="page" :class="{'active': cutTab === 4 }" @click.stop="cuts(4)">
        <img src="https://s.kcimg.cn/wap/images/saas/5.png">
        <p>新能源查询</p>
      </div>
    </div>

    <notice-box v-if="cutTab === 0" @setVal="setNotice"></notice-box>
    <chassis-box v-if="cutTab === 1" @setVal="setChass"></chassis-box>
    <fuel-box v-if="cutTab === 2"></fuel-box>
    <exempt-box v-if="cutTab === 3"></exempt-box>
    <energy-box v-if="cutTab === 4"></energy-box>

    <div slot="tabbar" class="m-btm flex-wrap row-flex">
      <div class="btn-reg">
        <yd-icon name="refresh" size=".28rem"></yd-icon>
        <em>重置</em>
      </div>
      <div class="btn-sch page" @click="sub">
        <yd-icon name="search" size=".36rem"></yd-icon>
        <em>开始查询</em>
      </div>
    </div>
  </yd-layout>
</template>

<script>
import NoticeBox from '@/components/home/home'
import ChassisBox from '@/components/home/chassis'
import FuelBox from '@/components/home/fuel'
import ExemptBox from '@/components/home/exempt'
import EnergyBox from '@/components/home/energy'
export default {
  name: 'Home',
  components: {
    NoticeBox,
    ChassisBox,
    FuelBox,
    ExemptBox,
    EnergyBox
  },
  data () {
    return {
      cutTab: 0,
      noticeVal: {},
      chassVal: {}
    }
  },
  methods: {
    sub () {
      this.$dialog.notify({
        mes: '5秒后自动消失，点我也可以消失！',
        timeout: 3000,
        callback: () => {
          // console.log('我走咯！')
        }
      })
      switch (this.cutTab) {
        case 0:
          this.jump('/bulletin')
          break
        case 1:
          this.jump('/chassis')
          break
        case 2:
          this.jump('/fuel')
          break
        case 3:
          this.jump('/exempt')
          break
        default:
          this.jump('/energy')
      }
    },
    cuts (e) {
      this.cutTab = e
    },
    setNotice (val) {
      this.noticeVal = val
      console.log(JSON.stringify(this.noticeVal))
    },
    setChass (val) {
      this.chassVal = val
      console.log(JSON.stringify(this.chassVal))
    }
  }
}
</script>

<style lang="less" scoped>
.nav-tabbar{
  width: 100%;
  height: 1.6rem;
  background: -webkit-linear-gradient(#f5f5f5,#fff 8%);
  background: -o-linear-gradient(#f5f5f5,#fff 8%);
  background: -moz-linear-gradient(#f5f5f5,#fff 8%);
  background: linear-gradient(#f6f6f6,#fff 8%);
  .active{
    border-bottom: 0.04rem solid #1571E5;
  }
 .page{
  text-align: center;
  box-sizing: border-box;
    img{
      width: 1rem;
      margin: 0.26rem auto 0.14rem;
    }
  }
}
.red-box{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 922;
  padding: 0 0.1rem 0 0.14rem;
  height: 0.4rem;
  background: #F44336;
  border-radius: 0 0 0 0.3rem;
  color:#fff;
  text-align: center;
  font-size: 0.24rem;
  line-height: 0.4rem;
}
.m-navbar:after{border-bottom: none;}
.m-btm{
  width: 100%;
  height: 1rem;
  background: #FFFFFF;
  box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.06);
}
.btn-reg{
  width: 1.92rem;
  height: 1rem;
  font-size: 0.28rem;
  color: #5c6066;
  text-align: center;
  line-height: 1rem;
}
.btn-sch{
  line-height: 1rem;
  height: 1rem;
  text-align: center;
  font-size: 0.36rem;
  color:#fff;
  background: #1571E5;
}

</style>
