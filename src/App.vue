<template>
<Header/>
<router-view></router-view>
 
</template>
<script>
import {Header} from '@/components/organisms'
export default {
   components: {
    Header
  }
}
</script>