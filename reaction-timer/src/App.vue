<template>
  <h1>{{ title }}</h1>
  <button @click="startGame" :disabled="isPlaying">PLAY</button>
  <p v-if="isPlaying">Wait for a box to appear and click it.</p>
  <Box v-if="isPlaying" :delay="delay" @end="endGame" />
  <Result v-if="showResult" :score="score" />
</template>

<script>
import Box from './components/Box.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Box,
    Result
  },
  data() {
    return{
      title: 'Reaction Timer',
      isPlaying: false,
      showResult: false,
      delay: null,
      score: null
    }
  },
  methods: {
    startGame() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResult = false
    },
    endGame(reactTime) {
      this.score = reactTime / 1000
      this.isPlaying = false
      this.showResult = true
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
button{
  border: 2px solid #2c3e50;
  border-radius: 10px;
  padding: 5px 20px;
  background-color: #319b77;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}
button:disabled{
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
