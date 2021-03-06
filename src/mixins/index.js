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
    toMsg (url, to) {
      localStorage.setItem('URL', url)
      this.jump(to)
    },
    noData () {
      this.$dialog.notify({
        mes: '查询无结果,请更改查询条件',
        timeout: 2000,
        callback: () => {
          this.$router.back()
        }
      })
    },
    isApp () {
      const UA = navigator.userAgent
      return UA.match(/360che/gi) ? 1 : 0
    },
    NMT (txt) {
      window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.callHandler('onChangeWebTitle', {'changeWebTitle': txt})
    }
  }
}
