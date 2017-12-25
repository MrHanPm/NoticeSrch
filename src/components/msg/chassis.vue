<template>
  <div class="tx-box">
    <div class="tx-name">底盘详细参数</div>
    <table class="x-table">
      <tr>
        <td>底盘型号</td>
        <td>{{val.dpxh}}</td>
      </tr>
      <tr>
        <td>产品名称</td>
        <td>{{val.cpmc}}</td>
      </tr>
      <tr>
        <td>产品商标</td>
        <td>{{val.cpsb}}</td>
      </tr>
      <tr>
        <td>企业名称</td>
        <td>{{val.qymc}}</td>
      </tr>
      <tr>
        <td>企业地址</td>
        <td>{{val.qydz}}</td>
      </tr>
      <tr>
        <td>生产地址</td>
        <td>{{val.scdz}}</td>
      </tr>
      <tr>
        <td>批次</td>
        <td>{{val.pc}}</td>
      </tr>
      <tr>
        <td>目录序号</td>
        <td>{{val.mlxh}}</td>
      </tr>
      <tr>
        <td>规格</td>
        <td>{{val.ltgg}}</td>
      </tr>
      <tr>
        <td>燃油类型</td>
        <td>{{val.rlzl}}</td>
      </tr>
      <tr>
        <td>转向形式</td>
        <td>{{val.zxxs}}</td>
      </tr>
      <tr>
        <td>前排乘客</td>
        <td>{{val.zxxs}}</td>
      </tr>
      <tr>
        <td>轴数</td>
        <td>{{val.zs}}</td>
      </tr>
      <tr>
        <td>轴距</td>
        <td>{{val.zj}}</td>
      </tr>
      <tr>
        <td>弹簧片数</td>
        <td>{{val.dhps}}</td>
      </tr>
      <tr>
        <td>轮胎数</td>
        <td>{{val.lts}}</td>
      </tr>
      <tr>
        <td>轮胎规格</td>
        <td>{{val.ltgg}}</td>
      </tr>
      <tr>
        <td>总质量</td>
        <td>{{val.zzl}}</td>
      </tr>
      <tr>
        <td>整备质量</td>
        <td>{{val.zbzl}}</td>
      </tr>
      <tr>
        <td>挂车质量</td>
        <td>{{val.gczl}}</td>
      </tr>
      <tr>
        <td>半挂鞍座</td>
        <td>{{val.bgaz}}</td>
      </tr>
      <tr>
        <td>轮距</td>
        <td>{{val.zj}}</td>
      </tr>
      <tr>
        <td>前悬后悬</td>
        <td>{{val.qxhx}}</td>
      </tr>
      <tr>
        <td>接近离去角</td>
        <td>{{val.jjlqj}}</td>
      </tr>
      <tr>
        <td>最高车速</td>
        <td>{{val.zgcs}}</td>
      </tr>
      <tr>
        <td>依据标准</td>
        <td>{{val.yjbz}}</td>
      </tr>
      <tr>
        <td>识别代码</td>
        <td>{{val.sbdh}}</td>
      </tr>
    </table>
    <table v-if="tbl.length > 0" class="th-table">
      <tr>
        <th>发动机型号</th>
        <th>排量(ml)</th>
        <th>功率(kw)</th>
        <th class="w">发动机生产企业</th>
      </tr>
      <tr v-for="(em, inx) in tbl" :key="inx">
        <td>{{em[0]}}</td>
        <td>{{em[1]}}</td>
        <td><div>{{em[2]}}</div></td>
        <td><div>{{em[3]}}</div></td>
      </tr>
    </table>
    <div class="tx-name">其他</div>
    <div class="txt-box">{{val.qt}}</div>
  </div>
</template>

<script>
export default {
  props: {
    val: Object,
    tbl: Array
  }
}
</script>

<style lang="less" scoped>
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
  th{background:#f6f6f6;width: 22%;border-right: 0.02rem solid #eaeaea;}
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
