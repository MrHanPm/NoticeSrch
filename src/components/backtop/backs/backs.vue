<template>
  <div class="y-backtop" v-html="mes"></div>
</template>

<script type="text/babel">
  export default {
    props: {
      mes: String,
      num: Number,
      callback: Function
    }
  }
</script>
