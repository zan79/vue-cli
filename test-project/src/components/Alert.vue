<template>
    <div @click.self="closeAlert" class="backdrop">
        <div class="msg-box">
            <h1>{{ alert }}</h1>
            <br>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['alert', 'message'],
    methods: {
        closeAlert(){
            this.$emit('close')
        }
    }
}
</script>

<style>
.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.msg-box{
    width: 500px;
    height: 250px;
    background-color: #fff;
    border-radius: 20px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
