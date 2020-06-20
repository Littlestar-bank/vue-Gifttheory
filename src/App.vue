<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-link to="/" exact>组件1</router-link>
    <router-link to="/page" active-class='page'>组件1</router-link>
<router-link to="/look">组件1</router-link> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px; */
}
.router-link-active{
  color: cyan;
}
 .page {
  color: cyan;
} 
.activeclass{
  background-color: yellow;
} 
</style>
