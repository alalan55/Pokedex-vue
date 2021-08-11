<template>
  <div class="home">
    <HomeTemplate :pokes="pokes"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { HomeTemplate } from "@/components/templates";

export default {
  name: "Home",
  components: {
    HomeTemplate,
  },
  created(){
    this.start();
  },
    computed: {
    pokes() {
      return this.$store.getters.$pokemons;
    },
  },
  methods:{
     ...mapActions(["getPokes"]),
     
    async start() {
      await this.$store.dispatch("getPokes");
    },
  }
};
</script>

