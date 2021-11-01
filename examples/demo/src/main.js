import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue'
  },
  mounted () {
    const message = this.message
  }
})
