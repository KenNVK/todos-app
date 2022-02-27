<template>
  <Header />
  <Contents />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Contents,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
  width: 100%;
  max-width: 650px;
  margin: 10px auto;
}
</style>