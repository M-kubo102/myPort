<template>
  <div id="app">
    <myHeader></myHeader>

    <router-view></router-view>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
