<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";

  export default {
    name: 'App',
  }
</script>

<style>
  * {
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
  }
  body {
    background-color: rgb(204, 192, 192);
  }
</style>
