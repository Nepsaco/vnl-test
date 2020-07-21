<template>
  <div id="list">
    <ul>
      <li v-for='elephant in elephants' :key='elephant.id' @click='emitCurrentElephant(elephant)'>
        {{elephant.name}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ElephantList',
  props: {
    elephants: Array
  },
  methods: {
    emitCurrentElephant(elephant) {
      return this.$emit('current-elephant', elephant)
    }
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
