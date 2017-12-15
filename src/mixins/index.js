export default {
  methods: {
    jump (to) {
      this.$router.push(to)
    },
    back () {
      if (this.$router) {
        this.$router.back()
      }
    },
    localItem (key, val) {
      if (arguments.leng === 1) {
        return localStorage.getItem(key)
      } else {
        return localStorage.setItem(key, val)
      }
    }
  }
}
