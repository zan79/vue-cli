<template>
  <teleport to=".nav">
    <Header>
      <h1>{{ header }}</h1>
      <template v-slot:links>
        <a href="#">Projects</a>
        <a href="#">Contacts</a>
      </template>
    </Header>
  </teleport>
  <div v-if="showAlert">
    <Alert :alert="alert" :message="message" @close="toggleAlert" />
  </div>
  <div v-if="showAlert2">
    <Alert alert="ALERTTTTTTTT" message="this is the alert2" @close="toggleAlert2" />
  </div>
  <div class="content">
    <h1>{{ title }}</h1>
    <br>
    <button @click="toggleAlert">Open Alert</button>
    <button @click="toggleAlert2">Open Alert2</button>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Alert from './components/Alert.vue'

export default {
  name: 'App',
  components: {
    Header,
    Alert
  },
  data() {
    return{
      title: 'Vue Test Project',
      header: 'Vue Component',
      showAlert: false,
      showAlert2: false,
      alert: 'You Win 1,000,000',
      message: 'claim through palawan'
    }
  },
  methods: {
    toggleAlert(){
      this.showAlert = !this.showAlert
    },
    toggleAlert2(){
      this.showAlert2 = !this.showAlert2
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.content{
  padding: 20px;
}
</style>
