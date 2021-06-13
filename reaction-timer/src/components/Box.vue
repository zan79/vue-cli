<template>
    <div class="box" v-if="setVisible" @click="stopTimer">
        CLICK ME
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            setVisible: false,
            timer: null,
            reactTime: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.setVisible = true
            this.startTimer()
        }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactTime += 10
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end', this.reactTime)
        }
    }
}
</script>

<style>
.box{
    width: 300px;
    background-color: #319b77;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    padding: 50px 0;
    margin: 100px auto;
    cursor: pointer;
}
</style>