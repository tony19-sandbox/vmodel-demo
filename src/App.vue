<script>
import MyComponent from './components/MyComponent.vue'
export default {
  components: {
    MyComponent,
  }
}
</script>

<template>
  <v-app id="app">
    <v-container>
      <v-btn @click="$store.commit('user/TOGGLE_LOADING')">Toggle loading</v-btn>
      <pre>loading: {{ $store.state.user.loading }}</pre>
      <MyComponent />
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
