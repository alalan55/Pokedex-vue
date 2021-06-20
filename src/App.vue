<template>
<Header/>
 <router-view v-slot="{Component}">
   <keep-alive>
      <component :is="Component"/>
   </keep-alive>
 </router-view>
 
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
