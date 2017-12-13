<template>
  <div class="jump-cover" v-if="show">
    <div class="loading visible load-boxs">
      <span class="loading-ring"> </span>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'v-loading',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style></style>