<template>
  <yd-layout>
    <yd-navbar v-if="isIco" slot="navbar" :title="navTit" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
      <div slot="right" class="red-box" :hidden="cutTab > 0">当前第{{pc}}批</div>
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

    <notice-box v-if="cutTab === 0" :ret="resets" :url="url"
      @setVal="setVals"></notice-box>
    <chassis-box v-if="cutTab === 1" :ret="resets"
      @setVal="setVals"></chassis-box>
    <fuel-box v-if="cutTab === 2" :ret="resets"
      @setVal="setVals"></fuel-box>
    <exempt-box v-if="cutTab === 3" :ret="resets"
      @setVal="setVals"></exempt-box>
    <energy-box v-if="cutTab === 4" :ret="resets"
      @setVal="setVals"></energy-box>

    <div slot="tabbar" class="m-btm flex-wrap row-flex">
      <div class="btn-reg" @click="reset">
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
import XHR from '@/api/service'
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
      isIco: true,
      navTit: '公告号查询',
      pc: 0,
      url: '',
      cutTab: 0,
      resets: 0,
      noticeVal: {},
      chassVal: {},
      fuelVal: {},
      exemVal: {},
      enerVal: {}
    }
  },
  created () {
    const STEPV = parseInt(localStorage.getItem('STEPV'))
    if (this.isApp()) {
      this.isIco = false
    }
    if (STEPV) {
      this.cuts(STEPV)
    }
    XHR.getHot().then(res => {
      if (res.data.status === 1) {
        this.pc = res.data.pc
        this.url = res.data.url
        localStorage.setItem('HL', res.data.url)
      } else {
        this.$dialog.notify({
          mes: '批次获取失败',
          timeout: 3000,
          callback: () => {}
        })
      }
    }).catch(err => {
      console.log(err)
    })
  },
  mounted () {
    const dm = document.querySelector('.y-backtop')
    const STEPV = parseInt(localStorage.getItem('STEPV'))
    if (dm) {
      this.$dialog.backtop({num: 6})
    }
    if (this.isApp()) {
      setTimeout(() => {
        if (STEPV) {
          this.cuts(STEPV)
        } else {
          this.NMT('公告号查询')
        }
      }, 800)
    }
  },
  methods: {
    sub () {
      let sbgb = ''
      switch (this.cutTab) {
        case 0:
          if (this.forVal(this.noticeVal)) {
            localStorage.setItem('VAL', JSON.stringify(this.noticeVal))
            sbgb = '公告号查询'
            this.jump('/bulletin')
          }
          for (let ems in this.noticeVal) {
            if (this.noticeVal[ems]) {
              sbgb += '|' + ems
            }
          }
          window.ga('send', 'event', '公告号查询', '开始查询', sbgb)
          break
        case 1:
          if (this.forVal(this.chassVal)) {
            localStorage.setItem('VAL', JSON.stringify(this.chassVal))
            sbgb = '底盘查询'
            this.jump('/chassis')
          }
          for (let ems in this.chassVal) {
            if (this.chassVal[ems]) {
              sbgb += '|' + ems
            }
          }
          window.ga('send', 'event', '公告号查询', '开始查询', sbgb)
          break
        case 2:
          if (this.forVal(this.fuelVal)) {
            localStorage.setItem('VAL', JSON.stringify(this.fuelVal))
            sbgb = '燃油查询'
            this.jump('/fuel')
          }
          for (let ems in this.fuelVal) {
            if (this.fuelVal[ems]) {
              sbgb += '|' + ems
            }
          }
          window.ga('send', 'event', '公告号查询', '开始查询', sbgb)
          break
        case 3:
          if (this.forVal(this.exemVal)) {
            localStorage.setItem('VAL', JSON.stringify(this.exemVal))
            sbgb = '免征查询'
            this.jump('/exempt')
          }
          for (let ems in this.exemVal) {
            if (this.exemVal[ems]) {
              sbgb += '|' + ems
            }
          }
          window.ga('send', 'event', '公告号查询', '开始查询', sbgb)
          break
        default:
          if (this.forVal(this.enerVal)) {
            localStorage.setItem('VAL', JSON.stringify(this.enerVal))
            sbgb = '新能源查询'
            this.jump('/energy')
          }
          for (let ems in this.enerVal) {
            if (this.enerVal[ems]) {
              sbgb += '|' + ems
            }
          }
          window.ga('send', 'event', '公告号查询', '开始查询', sbgb)
      }
    },
    setVals (val) {
      switch (this.cutTab) {
        case 0:
          this.noticeVal = val
          break
        case 1:
          this.chassVal = val
          break
        case 2:
          this.fuelVal = val
          break
        case 3:
          this.exemVal = val
          break
        default:
          this.enerVal = val
      }
    },
    forVal (objs) {
      for (let em in objs) {
        if (objs[em]) {
          return true
        }
      }
      this.$dialog.notify({
        mes: '请输入任一查询条件',
        timeout: 3000,
        callback: () => {}
      })
      return false
    },
    cuts (e) {
      this.cutTab = e
      switch (e) {
        case 0:
          this.navTit = '公告号查询'
          if (this.isApp()) {
            this.NMT('公告号查询')
          }
          break
        case 1:
          this.navTit = '底盘公告查询'
          if (this.isApp()) {
            this.NMT('底盘公告查询')
          }
          break
        case 2:
          this.navTit = '燃油公告查询'
          if (this.isApp()) {
            this.NMT('燃油公告查询')
          }
          break
        case 3:
          this.navTit = '免征公告查询'
          if (this.isApp()) {
            this.NMT('免征公告查询')
          }
          break
        default:
          this.navTit = '新能源公告查询'
          if (this.isApp()) {
            this.NMT('新能源公告查询')
          }
          break
      }
      localStorage.setItem('STEPV', e)
    },
    reset () {
      this.resets++
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
