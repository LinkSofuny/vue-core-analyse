<template>
  <div id="app">
    <h1 @click="isShow = !isShow">普通节点</h1>
    <HelloWorld v-if="isShow"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: false
    }
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
