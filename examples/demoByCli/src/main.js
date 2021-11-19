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

let app = new Vue({
  el: '#app',
  created() {
    console.log('parent created')
  },
  render: h => h(childDemo)
})
