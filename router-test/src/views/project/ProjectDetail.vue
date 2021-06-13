<template>
    <div v-if="projects">
        <h2>Project Detail</h2>
        <h1>{{ projects.title }}</h1>
        <p>{{ projects.details }}</p>
    </div>
    <div v-else>
        <p>Loading Projects...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            // id: this.$route.params.id
            projects: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/projects/' + this.id)
            .then(res => res.json())
            .then(data => this.projects = data)
            .catch(error => console.log(error.message))
    }
}
</script>

<style>

</style>