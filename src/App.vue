<template>
    <div id="app">
      <Books />
    </div>
</template>

<script>
import Books from './views/Books.vue'

export default {
  name: 'App',
  components: {
    Books
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
