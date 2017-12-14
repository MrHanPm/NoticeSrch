<template>
  <div class="loading visible load-boxs" v-if="show">
    <span class="loading-ring"> </span>
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
<style></style>