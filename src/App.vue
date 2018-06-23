<template>
  <div id="app">
      <app-header></app-header> 
      <home></home>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";


export default {
  components: {
      'app-header': Header,
      'app-footer': Footer,
      'home': Home
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss"> 
    * {
        margin: 0;
        padding: 0;
    }
</style>