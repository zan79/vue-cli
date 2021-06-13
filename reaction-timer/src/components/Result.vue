<template>
    <div class="container">
        <h2>Your Reaction Time is <br> {{ score }} Seconds</h2>
        <p>{{ comment }}</p>
        <!-- <p v-if="score < 0.5 ">Your amazingly fast</p>
        <p v-else-if="score < 1">You hava slow reflexes</p>
        <p v-else>You are terrible</p> -->
    </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            comment: null
        }
    },
    mounted() {
        if(this.score < 0.5) {
            this.comment = 'Your amazingly fast =)'
        } else if(this.score < 1) {
            this.comment = 'You hava slow reflexes =|'
        } else {
            this.comment = 'You are terrible =('
        }
    }
}
</script>

<style>
.container{
    width: 400px;
    border: 2px solid #319b77;
    border-radius: 20px;
    color: #319b77;
    text-align: center;
    padding: 50px 0;
    margin: 70px auto;
}
.container p{
    color: #000;
}
</style>