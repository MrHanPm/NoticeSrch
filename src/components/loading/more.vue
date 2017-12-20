<template>
  <div>
    <div class="loading visible load-boxs" v-if="show">
      <span class="loading-ring"> </span>
    </div>
    <div v-if="!show" class="txt">我是有底线滴～</div>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'v-more',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less" scoped>
.loading{margin-top: 0.5rem;}
.txt{
  padding-top: 0.5rem;
  text-align: center;
  font-size: 0.28rem;
  color:#666;
}
</style>