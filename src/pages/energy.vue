<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="新能源查询结果" color="#333" fontsize=".36rem">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <div class="contnb">共有<em>2340</em>条查询结果</div>

    
    <ul class="b-ft">
      <li class="flex-wrap row-flex">
        <div>批次:</div>
        <div class="page">售货车</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>企业名称:</div>
        <div class="page">4*2</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>品牌名称:</div>
        <div class="page">wadf3434</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>车辆型号:</div>
        <div class="page">12TR300</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>车辆名称:</div>
        <div class="page">4.677</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>目录序号:</div>
        <div class="page">
          <em>(23)</em>
          <em class="w">查看公告 ></em>
        </div>
      </li>
    </ul>

    <div class="loading visible load-boxs">
      <span class="loading-ring"> </span>
    </div>
  </yd-layout>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      cutTab: 0
    }
  },
  methods: {
    sub () {

    },
    cuts (e) {
      this.cutTab = e
      // console.log(this.cutTab)
    }
  }
}
</script>

<style lang="less" scoped>
.contnb{
  height: 0.8rem;
  padding: 0 0.24rem;
  line-height: 0.8rem;
  font-size: 12px;
  color: #5c6066;
  em{color: #1571E5; padding:0 4px;}
}

.b-msg{
  padding-left: 0.16rem;
  p{
    font-size: 0.28rem;
    color: #5C6066;
    line-height: 0.5rem;
    display: block;
    overflow: hidden;
  }
}
.b-ft{
  background: #fff;
  padding: 0.16rem 0.24rem;
  margin-bottom: 5px;
  font-size: 0.28rem;
  li{
    height: 0.48rem;
    color: #5c6066;
    line-height: 0.48rem;
    overflow: hidden;
    div:first-child{width: 1.4rem;}
  }
  .w{float: right; color: #1571E5;}
}

</style>
