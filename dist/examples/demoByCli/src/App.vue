<template>
  <div id="app">
    <ul class="hello" v-if="isShow">
      <li key="A">A</li><li key="B">B</li><li key="C">C</li><li key="D">D</li>
    </ul>
    <ul class="hello" v-else>
      <li key="B">B</li><li key="A">A</li><li key="D">D</li><li key="C">C</li>
    </ul>
    <button  @click="isShow = !isShow" > change</button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: 'App',
  data() {
    return {
      isShow: true
    }
  },
  components: {
    // HelloWorld,
  },
  watch: {
    isShow: [
      function () {
        console.log('isShow1', this.isShow)
      },
      function () {
        console.log('isShow2', this.isShow)
      },
      function () {
        console.log('isShow3', this.isShow)
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
