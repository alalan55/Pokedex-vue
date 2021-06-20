<template>
<Navbar/>
 <router-view/>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
  </div>
 
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
   components: {
    Navbar,

  },
}
</script>

<style>


</style>
