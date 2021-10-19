<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    HelloWorld,
  }
}
</script>

<template>
  <v-app id="app">
    <v-container>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Hello Vue 2 + Vite" />
    </v-container>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
