<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="公告号查询" color="#333" fontsize=".36rem">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <div slot="right" class="red-box">当前第345批</div>
    </yd-navbar>

    <div class="nav-tabbar flex-wrap row-flex">
      <div class="page active">
        <img src="https://s.kcimg.cn/wap/images/saas/2.png">
        <p>公告查询</p>
      </div>
      <div class="page">
        <img src="https://s.kcimg.cn/wap/images/saas/1.png">
        <p>底盘查询</p>
      </div>
      <div class="page">
        <img src="https://s.kcimg.cn/wap/images/saas/4.png">
        <p>燃油查询</p>
      </div>
      <div class="page">
        <img src="https://s.kcimg.cn/wap/images/saas/3.png">
        <p>免征查询</p>
      </div>
      <div class="page">
        <img src="https://s.kcimg.cn/wap/images/saas/5.png">
        <p>新能源查询</p>
      </div>
    </div>
    <div class="">

    </div>
    <div style="">

    </div>

    <div slot="tabbar" class="m-btm">
      <div class="btn-reg">
        <yd-icon name="refresh" size=".28rem"></yd-icon>
        <em>重置</em>
      </div>
      <div class="btn-sch">
        <yd-icon name="search" size=".36rem"></yd-icon>
        <em>开始查询</em>
      </div>
    </div>
  </yd-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
      margin: 0.3rem auto 0.16rem;
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
  float: left;
  width: 1.92rem;
  height: 1rem;
  font-size: 0.28rem;
  color: #5c6066;
  text-align: center;
  line-height: 1rem;
}
.btn-sch{
  float: right;
  line-height: 1rem;
  height: 1rem;
  text-align: center;
  width: 5.58rem;
  font-size: 0.36rem;
  color:#fff;
  background: #1571E5;
}

</style>
