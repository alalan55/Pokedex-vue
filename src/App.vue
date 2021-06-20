<template>
<Header/>
 <router-view v-slot="{Component}">
   <keep-alive>
      <component :is="Component"/>
   </keep-alive>
 </router-view>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
  </div>
 
</template>
<script>
import {Header} from '@/components/organisms'
export default {
   components: {
    Header

  },
}
</script>

<style>


</style>
