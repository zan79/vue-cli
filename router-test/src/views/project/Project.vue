<template>
  <h1>Projects</h1>
  <div v-if="projects.length">
    <div class="project" v-for="project in projects" :key="project.id">
      <router-link :to="{ name: 'ProjectDetail', params: { id: project.id }}">
        <h2>{{ project.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
        <p>Loading Projects...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/projects')
            .then(res => res.json())
            .then(data => this.projects = data)
            .catch(error => console.log(error.message))
    }
}
</script>

<style>
.project{
    width: 250px;
    margin: 10px auto;
    padding: 10px;
    border: 2px solid #42b983;
    border-radius: 10px;
}
.project:hover{
    background-color: #2c3e50;
}
.project h2,a{
    color: #42b983;
    text-decoration: none;
}
</style>