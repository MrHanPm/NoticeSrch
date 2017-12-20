<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="新能源查询结果" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>

    <div class="contnb">共有<em>{{this.total}}</em>条查询结果</div>

    
    <ul class="b-ft" v-for="(em, index) in dbList" :key="index">
      <li class="flex-wrap row-flex">
        <div>批次:</div>
        <div class="page">{{em.batch}}</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>企业名称:</div>
        <div class="page">{{em.companyName}}</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>品牌名称:</div>
        <div class="page">{{em.brand}}</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>车辆型号:</div>
        <div class="page">{{em.modelNumber}}</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>车辆名称:</div>
        <div class="page">{{em.carName}}</div>
      </li>
      <li class="flex-wrap row-flex">
        <div>目录序号:</div>
        <div class="page">
          <em>{{em.dirNumber}}</em>
          <em class="w">查看公告 ></em>
        </div>
      </li>
    </ul>

    <v-more :show="isMore"></v-more>
    <v-loading :show="isLod"></v-loading>
  </yd-layout>
</template>

<script>
import XHR from '@/api/service'
export default {
  components: {},
  data () {
    return {
      cutTab: 0,
      isLod: false,
      isMore: true,
      page: 1,
      dbList: [],
      total: 0,
      val: {}
    }
  },
  created () {
    let VAL = JSON.parse(localStorage.getItem('VAL'))
    let newVal = {}
    let psList = ['modelNumber', 'companyName', 'brand', 'carName']
    for (let em in psList) {
      if (VAL[psList[em]]) {
        newVal[psList[em]] = VAL[psList[em]]
      }
    }
    this.val = newVal
    this.loadList()
  },
  mounted () {
    let DOM = document.getElementById('scrollView')
    DOM.addEventListener('scroll', () => {
      if (DOM.scrollHeight - DOM.offsetHeight - DOM.scrollTop < 14 && this.isScrl) {
        this.loadList()
      }
    }, false)
  },
  methods: {
    loadList () {
      let v = this.val
      v.page = this.page
      this.isScrl = false
      XHR.getNew(v).then(res => {
        if (res.data.status === 1) {
          if (this.isLod) {
            this.isLod = false
          }
          this.dbList.push(...res.data.newData)
          this.total = res.data.total
          this.page++
          if (this.page > Math.ceil(this.total / 10)) {
            this.isScrl = false
            this.isMore = false
            return
          }
          this.isScrl = true
        }
      }).catch(err => {
        console.log(err)
      })
    },
    sub () {},
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
  margin-bottom: 0.08rem;
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
