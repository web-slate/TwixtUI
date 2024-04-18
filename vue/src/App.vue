<template>
  <h1>TwixtUI for Vue</h1>
  <InputSingleLine msg="Welcome to Your Vue.js App"/>
</template>

<script>
import InputSingleLine from './components/InputSingleLine.vue'

export default {
  name: 'App',
  components: {
    InputSingleLine
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
