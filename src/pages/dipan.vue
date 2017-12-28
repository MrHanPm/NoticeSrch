<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="底盘查询详情" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>
    <div v-if="dpDetail.title" class="m-name">{{dpDetail.title}}</div>
    <chassis-box :val="dpDetail" :tbl="dpEngine"></chassis-box>
    <v-loading :show="isLod"></v-loading>
  </yd-layout>
</template>

<script>
import XHR from '@/api/service'
import ChassisBox from '@/components/msg/chassis'
export default {
  components: {
    ChassisBox
  },
  data () {
    return {
      isLod: true,

      dpDetail: {},       // 底盘模块详情参数
      dpEngine: []       // 底盘发动机模块
    }
  },
  created () {
    let URL = localStorage.getItem('URL')
    this.$dialog.backtop({num: 6})
    XHR.getMsg(URL).then(res => {
      if (res.data.status === 1) {
        this.dpDetail = res.data.data
        this.dpEngine = res.data.engine
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
    let DOM = document.getElementById('scrollView')
    DOM.addEventListener('scroll', () => {
      if (DOM.scrollTop > 1000) {
        this.$dialog.backtop({num: 0})
      } else {
        this.$dialog.backtop({num: 6})
      }
    }, false)
  },
  methods: {
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
.slider-item img{
  width: 100%;
}
</style>
