<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="燃油查询详情" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>

    <div>
      <div class="tx-name">燃油公告参数</div>
      <table class="x-table">
        <tr>
          <td>企业名称</td>
          <td>{{data.extend.company}}</td>
        </tr>
        <tr>
          <td>产品名称</td>
          <td>{{data.extend.proname}}</td>
        </tr>
        <tr>
          <td>产品型号</td>
          <td>{{data.extend.promodel}}</td>
        </tr>
      </table>
      <div class="tx-name">整车参数</div>
      <table class="x-table">
        <tr>
          <td>外形尺寸(长×宽×高)mm</td>
          <td>{{data.shapesize}}</td>
        </tr>
        <tr>
          <td>货箱栏板尺寸(长×宽×高 mm)或容积</td>
          <td>{{data.innersize}}</td>
        </tr>
        <tr>
          <td>整备质量(Kg)</td>
          <td>{{data.zbweight}}</td>
        </tr>
        <tr>
          <td>总质量(Kg)</td>
          <td>{{data.weight}}</td>
        </tr>
        <tr>
          <td>驱动形式</td>
          <td>{{data.drivermodel}}</td>
        </tr>
      </table>
      <div class="tx-name">底盘配置与技术参数</div>
      <table class="x-table">
        <tr>
          <td>底盘生产企业</td>
          <td>{{data.pancompany}}</td>
        </tr>
        <tr>
          <td>底盘型号</td>
          <td>{{data.panmodel}}</td>
        </tr>
        <tr>
          <td>发动机生产企业</td>
          <td>{{data.enginecompany}}</td>
        </tr>
        <tr>
          <td>发动机型号</td>
          <td>{{data.enginemodel}}</td>
        </tr>
        <tr>
          <td>变速器型号</td>
          <td>{{data.bsqmodel}}</td>
        </tr>
        <tr>
          <td>轮胎规格型号</td>
          <td>{{data.tyremodel}}</td>
        </tr>
        <tr>
          <td>主减速器速比(驱动桥速比)</td>
          <td>{{data.jsqrate}}</td>
        </tr>
        <tr>
          <td>综合燃料消耗量L/100km</td>
          <td>{{data.avecost}}</td>
        </tr>
        <tr>
          <td>60km/h空载等速燃料消耗量L/100km</td>
          <td>{{data.emptycost}}</td>
        </tr>
      </table>
      <div class="tx-name">燃料消耗量参数表</div>
      <table class="x-table">
        <tr>
          <td>产品型号</td>
          <td></td>
        </tr>
        <tr>
          <td>执行标准</td>
          <td>{{data.prostd}}</td>
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
        <tr v-for="(em, inx) in fullCost[0]" :key="inx">
          <td>{{em}}</td>
          <td>{{fullCost[1][inx]}}</td>
          <td>{{fullCost[2][inx]}}</td>
        </tr>
      </table>

      <table class="x-table">
        <tr style="background:#fff;">
          <td>燃油消耗量达标车型编号</td>
          <td>{{data.prosn}}</td>
        </tr>
      </table>
    </div>
    <v-loading :show="isLod"></v-loading>
    <yd-backtop></yd-backtop>
  </yd-layout>
</template>

<script>
import XHR from '@/api/service'
export default {
  components: {},
  data () {
    return {
      isLod: true,
      data: {
        extend: {}
      },
      fullCost: []
    }
  },
  created () {
    let RYL = localStorage.getItem('RYL')
    XHR.getMsg(RYL).then(res => {
      if (res.data.status === 1) {
        this.isLod = false
        this.data = res.data.data
        this.fullCost = res.data.fullCost
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
    background: #fff;
    vertical-align: middle;
    font-size: 0.28rem;
    border-bottom:0.02rem solid #eaeaea;
    td{
      table-layout: auto;
      padding-left: 5px;
      word-break: break-all;
      border-right: 0.02rem solid #eaeaea;
      height: 0.8rem;
    }
    td:first-child{
      width: 1.9rem;
      padding-left: 0;
      text-align: center;
    }
    td:last-child{border-right:0;}
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
    vertical-align: middle;
    background: #fff;
    border-bottom:0.02rem solid #eaeaea;
  }
  td{
    height: 0.8rem;
    border-right:0.02rem solid #eaeaea;
  }
  td:last-child{border-right:0;}
  .w{background:#f6f6f6;}
}
.d-table tr:nth-child(even){
  background:#f6f6f6;
}
</style>
