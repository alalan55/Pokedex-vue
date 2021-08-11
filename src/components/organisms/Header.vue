<template>
    <header>
        <Navbar/>
    </header>
</template>

<script>
import {Navbar} from '@/components/molecules'
    export default {
        components:{
            Navbar
        }
    }
</script>

<style lang="css" scoped>
header {
  width: 100%;
  height: 70px;
  -webkit-box-shadow: -3px 6px 37px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 6px 37px -17px rgba(0, 0, 0, 0.75);
  box-shadow: -3px 6px 37px -17px rgba(0, 0, 0, 0.75);
  /* margin-bottom: 25px; */
}

</style>