<template>
  <div id="app">
    <h1>Elephant App</h1>
    <h2>There are {{getNumberOfElephants()}} Elephants.</h2>
    <h2>There are {{getNumberOfMaleElephants()}} male Elephants.</h2>
    <h2>There are {{getNumberOfFemaleElephants()}} female Elephants.</h2>
    <ElephantHero v-if='hero' :elephant='currentElephant'/>
    <ElephantList :elephants='elephants' @current-elephant='setCurrentElephant' />
  </div>
</template>

<script>
import ElephantList from '@/components/ElephantList'
import ElephantHero from '@/components/ElephantHero'

export default {
  name: 'App',
  components: {
    ElephantList,
    ElephantHero
  },
  data() {
    return {
      elephants: [],
      hero: false,
      currentElephant: {}
    }
  },
  mounted() {
    fetch('https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants')
      .then(response => response.json())
      .then(this.sortByDOB)
      .then(sortedElephants => this.elephants = sortedElephants)
  },
  methods: {
    getNumberOfElephants() {
      return this.elephants.length
    },
    getNumberOfMaleElephants() {
      return this.elephants
        .filter(elephant => {
          return elephant.sex === 'Male'
        }).length
    },
    getNumberOfFemaleElephants() {
      return this.elephants
        .filter(elephant => {
          return elephant.sex === 'Female'
        }).length
    },
    sortByDOB(elephants) {
      return elephants.sort((a, b) => a.dob - b.dob)
    },
    setCurrentElephant(elephant) {
      this.currentElephant = elephant 
      this.hero = true
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
