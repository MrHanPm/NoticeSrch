<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="燃油查询详情" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>
    <!-- <yd-slider autoplay="5000">
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
      </yd-slider-item>
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
      </yd-slider-item>
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
      </yd-slider-item>
    </yd-slider> -->
    <div class="m-name">CA5250XXYP63K43 解放厢式运输车</div>
    
    <div>
      <div class="tx-name">燃料消耗量参数表</div>
      <table class="x-table">
        <tr>
          <td>产品型号</td>
          <td>厢式运输车</td>
        </tr>
        <tr>
          <td>执行标准</td>
          <td>DFJI3434DGJ3434JK</td>
        </tr>
      </table>

      <table class="d-table">
        <tr class="w">
          <td>满载等速</td>
          <td rowspan="2">档位</td>
          <td>燃料消耗量</td>
        </tr>
        <tr>
          <td>车速 km/h</td>
          <td>油耗 L/100km</td>
        </tr>
        <tr>
          <td>30</td>
          <td>--</td>
          <td>--</td>
        </tr>
      </table>

      <table class="x-table">
        <tr style="background:#fff;">
          <td>燃油消耗量达标车型编号</td>
          <td>厢式运输车</td>
        </tr>
      </table>
    </div>
    <v-loading :show="isLod"></v-loading>
  </yd-layout>
</template>

<script>
import XHR from '@/api/service'
export default {
  components: {},
  data () {
    return {
      isLod: true,
      data: {},
      fullCost: []
    }
  },
  created () {
    let RYL = localStorage.getItem('RYL')
    XHR.getMsg(RYL).then(res => {
      if (res.data.status === 1) {
        // this.isLod = false
      }
    }).catch(err => {
      console.log(err)
    })
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
.tx-name{
  padding:0.2rem 0.25rem;
  font-size: 0.28rem;
  color:#333;
  font-weight: bold;
  line-height: 0.34rem;
  background:#eaeaea;
}
.x-table{
  display: block;
  width:100%;
  border-collapse: collapse;
  tr{
    width:100%;
    display: block;
    min-height: 0.8rem;
    line-height: 0.8rem;
    background: #fff;
    vertical-align: middle;
    font-size: 0.28rem;
    td{
      table-layout: auto;
      padding-left: 5px;
      word-break: break-all;
      border-right: 0.02rem solid #eaeaea;
      border-bottom:0.02rem solid #eaeaea;
    }
    td:first-child{
      width: 1.9rem;
      padding-left: 0;
      text-align: center;
    }
    td:last-child{border-right:0;}
    div{ line-height: 0.36rem;}
  }
}
.x-table tr:nth-child(odd){
  background:#f6f6f6;
}
.d-table{
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  tr{
    width: 100%;
    min-height: 0.8rem;
    line-height: 0.8rem;
    vertical-align: middle;
    background: #fff;
  }
  td{
    min-height: 0.8rem;
    border-right:0.02rem solid #eaeaea;
    border-bottom:0.02rem solid #eaeaea;
  }
  td:last-child{border-right:0;}
  .w{background:#f6f6f6;}
}
.d-table tr:nth-child(even){
  background:#f6f6f6;
}
</style>
