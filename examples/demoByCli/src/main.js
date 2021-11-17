import Vue from '../../../dist/vue.js'
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
Vue.mixin({
  created() {
    console.log('parent created')
  }
})

let app = new Vue({
  el: '#app',
  render: h => h(childDemo)
})
