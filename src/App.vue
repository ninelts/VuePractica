<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Cabecera></Cabecera>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
export default {
  name: "app",
  components: {
    Cabecera
  }
};
</script>
