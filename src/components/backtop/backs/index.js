import Vue from 'vue'

const BackConstructor = Vue.extend(require('./backs.vue'))

const instance = new BackConstructor({
  el: document.createElement('div')
})

let lock = false

BackConstructor.prototype.closeNotify = function () {
  setTimeout(() => {
    const el = instance.$el
    el.parentNode && el.parentNode.removeChild(el)
    lock = false
  }, 150)
  typeof this.callback === 'function' && this.callback()
}

const Backtop = (options = {}) => {
  instance.$el.innerHTML = '回顶部'
  instance.$el.className = 'y-backtop'
  instance.callback = options.callback
  instance.box = options.box
  if (options.num > 1) {
    instance.closeNotify()
    return
  }
  if (lock) {
    return
  }
  lock = true
  document.body.appendChild(instance.$el)
  instance.$el.addEventListener('click', () => {
    document.getElementById('scrollView').scrollTop = 0
    if (instance.box) {
      document.querySelector('.g-scr-box').scrollTop = 0
    }
    instance.closeNotify()
  })
}

export default Backtop
