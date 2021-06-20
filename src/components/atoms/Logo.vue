<template>
    <router-link to="/">
        <img src="../../assets/logoPoke.png" :alt="alt" />
    </router-link>
</template>

<script>
    export default {
        props:{
            alt: {Type: String}
        }
    }
</script>

<style lang="css" scoped>
img{
    width: 12em;
}
</style>