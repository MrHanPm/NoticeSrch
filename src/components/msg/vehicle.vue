<template>
  <div class="tx-box">
    <div class="tx-name">厂家信息</div>

    <table class="x-table">
      <tr>
        <td>车辆名称</td>
        <td>{{val.protype}}</td>
      </tr>
      <tr>
        <td>公告型号</td>
        <td>{{val.model}}</td>
      </tr>
      <tr>
        <td>公告批次</td>
        <td>{{val.pcsn}}</td>
      </tr>
      <tr>
        <td>品牌名称</td>
        <td>{{val.brand}}</td>
      </tr>
      <tr>
        <td>企业名称</td>
        <td>{{val.factory}}</td>
      </tr>
      <tr>
        <td>企业地址</td>
        <td>{{val.address}}</td>
      </tr>
      <tr>
        <td>生产地址</td>
        <td>{{val.shengchanaddress}}</td>
      </tr>
      <tr>
        <td>燃油</td>
        <td>{{val.ry}}</td>
      </tr>
      <tr>
        <td>免征</td>
        <td>{{val.mz}}</td>
      </tr>
      <tr>
        <td>环保</td>
        <td>-</td>
      </tr>
    </table>

    <div class="tx-name">主要技术参数</div>

    <table class="x-table">
      <tr>
        <td>外形尺寸</td>
        <td><div>{{val.trucklength}}X{{val.truckwidth}}X{{val.truckheight}}</div></td>
      </tr>
      <tr>
        <td>货箱尺寸</td>
        <td>{{val.boxlength}}X{{val.boxwidth}}X{{val.boxheight}}</td>
      </tr>
      <tr>
        <td>轴数</td>
        <td>{{val.zhoushu}}</td>
      </tr>
      <tr>
        <td>轴距</td>
        <td>{{val.zhouju}}</td>
      </tr>
      <tr>
        <td>轴荷</td>
        <td>{{val.zhouhe}}</td>
      </tr>
      <tr>
        <td>整备质量</td>
        <td>{{val.zbweight}}</td>
      </tr>
      <tr>
        <td>额定载质量</td>
        <td>{{val.edweight}}</td>
      </tr>
      <tr>
        <td>总质量</td>
        <td>{{val.totalweight}}</td>
      </tr>
      <tr>
        <td>挂车质量</td>
        <td>{{val.gcweight}}</td>
      </tr>
      <tr>
        <td>半挂鞍座</td>
        <td>{{val.maxczweight}}</td>
      </tr>
      <tr>
        <td>载质量系数</td>
        <td>{{val.useratio}}</td>
      </tr>
      <tr>
        <td>前排乘客</td>
        <td>{{val.qianpainum}}</td>
      </tr>
      <tr>
        <td>额定载客</td>
        <td>{{val.peoplenum}}</td>
      </tr>
      <tr>
        <td>轮胎数</td>
        <td>{{val.tyrenum}}</td>
      </tr>
      <tr>
        <td>轮胎规格</td>
        <td>{{val.tyretype}}</td>
      </tr>
      <tr>
        <td>弹簧片数</td>
        <td>{{val.thpnum}}</td>
      </tr>
      <tr>
        <td>前轮距</td>
        <td>{{val.qianlunju}}</td>
      </tr>
      <tr>
        <td>后轮距</td>
        <td>{{val.houlunju}}</td>
      </tr>
      <tr>
        <td>前悬/后悬</td>
        <td>{{val.qianhouxuan}}</td>
      </tr>
      <tr>
        <td>接近角/离去角</td>
        <td>{{val.liqujiao}}</td>
      </tr>
      <tr>
        <td>最高车速</td>
        <td>{{val.maxrate}}</td>
      </tr>
      <tr>
        <td>底盘型号</td>
        <td>{{val.model}}</td>
      </tr>
      <tr>
        <td>燃油种类</td>
        <td>{{val.fueltype}}</td>
      </tr>
      <tr>
        <td>防抱死制动系统</td>
        <td>{{val.bbsfangbaosi}}</td>
      </tr>
      <tr>
        <td>排放标准</td>
        <td>{{val.pfstd}}</td>
      </tr>
      <tr>
        <td>Vin代码</td>
        <td>{{val.sbsn}}</td>
      </tr>
    </table>
    <div class="tx-name">发动机参数</div>
    <table class="th-table">
      <tr>
        <th>发动机型号</th>
        <th>排量(ml)</th>
        <th><div>功率(kw)</div></th>
        <th class="w">发动机生产企业</th>
      </tr>
      <tr v-if="tbl" v-for="(em, inx) in tbl" :key="inx">
        <td>{{em[0]}}</td>
        <td>{{em[1]}}</td>
        <td><div>{{em[2]}}</div></td>
        <td><div>{{em[3]}}</div></td>
      </tr>
    </table>
    <div class="tx-name">其他</div>
    <div class="txt-box">{{val.remarks}}</div>
  </div>
</template>

<script>
export default {
  props: {
    val: Object,
    tbl: {
      type: [Array, Boolean],
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
.tx-box{}
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
      height: 0.8rem;
      word-break: break-all;
      border-right: 0.02rem solid #eaeaea;
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
.th-table{
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  th{background:#f6f6f6;width: 22%;border-right: 0.02rem solid #eaeaea;height: 0.8rem;}
  tr{
    width:100%;
    background: #fff;
    vertical-align: middle;
    font-size: 0.28rem;
    border-bottom:0.02rem solid #eaeaea;
  }
  td{
    height: 0.8rem;
    border-right: 0.02rem solid #eaeaea;
  }
  td:last-child{border-right:0;}
  .w{width: 44%;}
}
.txt-box{
  width: 100%;
  padding: 0.25rem;
  background:#fff;
  font-size: 0.28rem;
  color:#333;
}
</style>
