import Vue from '../../../dist/vue.js'
import App from './App'
new Vue({
  el: '#app',
  beforeCreate () {
    console.log('1')
  },
  render: h => h(App)
})
