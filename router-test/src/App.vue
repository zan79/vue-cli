<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Project' }">Project</router-link>
  </div>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Forward</button>
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  background-color: #42b983;
  color: #fff;
}
button{
  background-color: #ddd;
  border: none;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>
