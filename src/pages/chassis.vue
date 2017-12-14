<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="底盘查询结果" color="#333" fontsize=".36rem">
      <div slot="left" @click="this.back">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>

    <div class="contnb">共有<em>2340</em>条查询结果</div>

    <div class="bul-box">
      <div class="bu-title">及肤色及肤色是对方DFGDFG及肤色是对方DFGDFG是对方DFGDFG</div>
      <ul class="b-ft">
        <li class="flex-wrap row-flex">
          <div>发动机:</div>
          <div class="page">CA34GD-W43</div>
        </li>
        <li class="flex-wrap row-flex">
          <div>轴距:</div>
          <div class="page">CA34GD-W43</div>
        </li>
        <li class="flex-wrap row-flex">
          <div>底盘名称:</div>
          <div class="page">载货汽车地盘</div>
        </li>
        <li class="flex-wrap row-flex">
          <div>批次:</div>
          <div class="page">300</div>
        </li>
        <li class="flex-wrap row-flex">
          <div>地盘类别:</div>
          <div class="page">二类</div>
        </li>
        <li class="flex-wrap row-flex">
          <div>燃油类型:</div>
          <div class="page">汽油／NG两用燃料</div>
        </li>
      </ul>
    </div>

    <v-more :show="isMore"></v-more>
    <v-loading :show="isLod"></v-loading>
  </yd-layout>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      cutTab: 0,
      isLod: false,
      isMore: true
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
.bul-box{
  background: #fff;
  position: relative;
  padding: 0 0.24rem 0.16rem;
}
.bul-box:after{
  position: absolute;
  top: 50%;
  right: 0.25rem;
  display: block;
  font-family: YDUI-INLAY;
  font-size: .34rem;
  color: #c9c9c9;
  content: "\E608";
}
.bu-title{
  font-size: 0.32rem;
  color: #17181A;
  line-height: 0.48rem;
  padding: 0.16rem 0 0.06rem;
}
.b-img{
  width: 2.24rem;
  height: 1.5rem;
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAlCAMAAACDOLyvAAAAh1BMVEUAAADGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsYylt1KAAAALHRSTlMAsEME1+z33WQIyy3i5vFTEyR0jW9XNAyjm8EolB8QaRfReYVexbupSbY6f0EF/BgAAATNSURBVEjHzZbJgqMgEIZRUOO+JG5xNzFm4f2fb4oCNZPYfZrD/IduKCp+UAtKpGbnfJ4ePdlXKVat5MOaBULFjn8tFqb80+xzkGnvM45c6PZpjtE8722Kg9iX2ULITdt008lLjThqmtW0sK84OKPZV/5Fk2iLPA4KHsv0vkI+ZUUXvq/wumvObvwHjT9BnKb8iXHfNQdu8ROk+ytc42FVSxPxL5Xb8w5pepULd5J2h3ddDx7+2J05qMjeFXKh0zvEIF9yJT0kvygJuFCFkDKu3FXx/fskRkM+lBkcF86Ow0ayrxdH1fR5SM/8S0l6qH6FZLKyXwPucZ9x4m8Ffi9qtiZpLuaiPJJNcsfxR6yk9UAQUu8yUsVo1fwJ+5pqYRqkId86/PpKkrH7aDYHNwRW3N1lj6GbyGD9wjCAQe8IsSFdvs8TCTidTlfUadPYkFoWVteNeKLzuhStjEqe1XcV8gBzM9FLhFAywj+NwgLd7zmnJ80P3VVEK8OS0ZcMesSZaXJEO6SDvzPFXAWBYRgcZfjG8iDkFwZoMZqG1BY22+EoVeCHwDQsEb5yxGvout1ssRuD5G2j99WDo1K1WMFak3nIFX5gWBntY2WgXLexr9AzD1kNgcDZXxekAenLH/yr/WxM/JG8q67tUjXCex3Ac1icv7jSVZq/+iRi61mU9qprhMRy1GszPtHPGKxggZjpPoS4nlw/6ItC7Eltmd6f5LpVwRsjED/jm7DudiFYM78rxMehNPIG6dIwERDjxlec5+5CsNN/k26v6w75kCaerqe4Nqqz7ECQctff9PwrXPcqktkQJOtyXDXr5DXIbF7lBg5yI/knZFf0r+qisjsm96OLnbZYKqbGQFEiPVj8fkGa8T4kwtVSTRQD2r4z3xnQI5ZlsXTp/IQSehHv+elEpMqbpj2Kfh/Sni2QqtW+C8MwDSNMdZqGUmnakKaPQISkvgfuozy2UEv+vWxK/lvZQhGlOV6b+bbV/C+XPFp80U16rd7taUySUybu5EToUhESikGHpXB1GGP+yS6Z1kK62fTs67LQ5vl2WXDHAVy8jtizBYMhIbRkN/HA2nJ0CStl4T9JyFFTv7xWGeBg6DFfyynjRo/1ec+gFJnnO9n2MWFZ3py3Z24CDDyIA7+KSbnegvbTrSrdgCKduPmsKhe4Azcy94Jffw/uZ3kPNod7EBAw6q7JXxCYNWoWt5oWXFxop7aNTV7Ss3g5HuWrYJPHa8Cbqhss7sMZEDJzD34vITZ0gYQkGGflzdTndYW3MjX5ESAMPAttg1R1XZgAAXxR13VIWsZ9SroFEivIED4cX0K8s+NMmYIMnLUKcoGphHj06NFxhUSFeDMjBAemToddiFdM5wVym5wX/Q3i97Qh3Qqxm6itfISYTQsXudY6IlyHBRIpiAF1sIZLif4ULr8hZIUokM8LMoic9AF/RExBLjLxbdQ3APbyLfHUtns44UkbiQ2Jj6OobwFSR1EFif+GuNrtAZHqRHmetQlGFGrvpjGoRUy/b3n+wR7WEnaxhD1/JHD4gQqwZ3mGnt+4aVmqhE0BSVQJq4+HoIDjFIEYlWDTcNQR4egMzC9ysjZjFkPWGbMewLywI4UYwtQrc9JrDDSMhCbFRaRJL8uM/AH39wTEGf098gAAAABJRU5ErkJggg==) center center no-repeat #f8f8f8;
  background-size: 60%;
  overflow: hidden;
  img{
    width: 2.24rem;
    height: 1.5rem;
  }
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
  font-size: 0.28rem;
  li{
    height: 0.48rem;
    color: #5c6066;
    line-height: 0.48rem;
    overflow: hidden;
    div:first-child{width: 1.4rem;}
  }
}

</style>
