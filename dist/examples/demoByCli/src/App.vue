<template>
  <div id="app">

    <!-- <HelloWorld v-if="isShow"/> -->
    <!-- <div v-else>普通节点2</div> -->
    <button  @click="isShow = !isShow" > change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: false
    }
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
