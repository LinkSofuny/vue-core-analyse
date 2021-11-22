import Vue from '../../../dist/vue.js'
import App from './App.vue'
let childDemo = {
  template: '<div>{{ msg }}</div>',
  created() {
    console.log('child created');
  },
  mounted() {
    console.log('child mounted');
  },
  data() {
    return {
      msg: 'Hello Vue'
    }
  }
}
debugger
Vue.component('childDemo', childDemo)

let app = new Vue({
  el: '#app',
  render: h => h(App)
})
