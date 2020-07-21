<template>
  <div id="hero">
    <h2>{{elephant.name}}</h2>
    <img :src='elephant.image' alt='Clicked Elephant'/>
  </div>
</template>

<script>

export default {
  name: 'ElephantHero',
  props: {
    elephant: Object
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
  margin-top: 60px;
}
</style>
