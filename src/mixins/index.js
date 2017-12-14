export default {
  methods: {
    jump (to) {
      this.$router.push(to)
    },
    back () {
      if (this.$router) {
        this.$router.back()
      }
    }
  }
}