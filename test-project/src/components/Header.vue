<template>
    <div class="bar">
        <slot></slot>
        <div class="nav-links">
            <slot name="links">navlinks</slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bar{
    width: 100%;
    height: 60px;
    background-color: #2c3e50;
    color: #008055;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-links{
    margin-left: 20px;
}
.nav-links a{
    text-decoration: none;
    color: #fff;
    margin-left: 20px;
    padding: 8px;
    border: 2px solid #fff;
    border-radius: 10px;
}
</style>