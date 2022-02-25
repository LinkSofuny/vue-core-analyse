<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <input type="text" v-model="message">
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      message: '111'
    }
  },
  components: {
    // HelloWorld,
  },
  watch: {

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
