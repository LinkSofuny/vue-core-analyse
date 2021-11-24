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
Vue.component('childDemo', function (resolve) {
  require(
    ['./components/HelloWorld.vue'],
    (res) => resolve(res)
  )
})

let app = new Vue({
  el: '#app',
  render: h => h(App)
})
