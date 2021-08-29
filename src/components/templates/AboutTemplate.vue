<template>
  <div class="container" v-if="pokemon">
        <CardAbout :pokemon="pokemon"/>
  </div>
  <div v-else>Carregando...</div>
</template>
<script>
import {CardAbout} from '@/components/organisms'
export default {
  components: {
      CardAbout,
  },
  data() {
    return {
      BASE_URL: "https://pokeapi.co/api/v2/pokemon/",
      id: this.$route.params.id,
      pokemon: {},
    };
  },
  created() {
    this.buscarDados();
  },
  methods: {
    async buscarDados() {
      const retorno = await fetch(`${this.BASE_URL}${this.id}`);
      this.pokemon = await retorno.json();

      console.log(this.pokemon.abilities[0].ability.name)
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: calc(100vh - 70px);
  padding: 4rem;
}

</style>
