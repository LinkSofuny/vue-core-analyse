import Vue from 'vue'

new Vue({
  el: '#app',
  data () {
    return {
      message: 'Hello Vue'
    }
  },
  render(creatElement) {
    return creatElement('div', {
      attrs: {
        id: '#app1'
      }
    }, this.message)
  }
})
