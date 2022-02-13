<template>
  <div class="container" v-if="pokemon">
    <div class="card-informacoes" :class="pokeType">
      <div class="name-pokemon">
        <span>
          {{ pokemon.name }} <span class="normal">#{{ pokemon.id }}</span>
        </span>
      </div>
      <div class="wrapper-content">
        <div class="img-poke">
          <figure>
            <img :src="pokemon.sprites?.front_default" :alt="pokemon.name" />
          </figure>
        </div>
        <div class="dinamycs-components">
          <DinamycsInfosPoke :pokemonInfo="pokemon" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>Carregando...</div>
</template>
<script>
import { DinamycsInfosPoke } from "@/components/organisms";
export default {
  components: {
    DinamycsInfosPoke,
  },
  data() {
    return {
      BASE_URL: "https://pokeapi.co/api/v2/pokemon/",
      id: this.$route.params.id,
      pokeType: this.$route.params.poketype,
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
    },
  },
};
</script>
<style  scoped>
.container {
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 2rem;
  /* border: 1px solid red; */
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
.card-informacoes {
  /* border: 1px solid; */
  border-radius: 20px;
  height: auto;
  width: 100%;
}
.name-pokemon {
  border-radius: 20px;
  /* border: 1px solid blue; */
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.name-pokemon span {
  font-weight: 900;
  font-size: 1.3em;
  text-transform: uppercase;
  color: white;
}
.name-pokemon span .normal {
  background: none;
  font-weight: 500;
  font-size: 0.9em;
  padding-left: 0.4rem;
}
.wrapper-content {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.wrapper-content > div {
  border-radius: 20px;
  flex: 1 1 200px;
  /* border: 1px solid orange; */
  padding: 0.5rem;
  height: 100%;
}
.img-poke {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-poke figure {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-poke figure img {
  width: 70%;
}

@media screen and (min-width: 500px) {
  .wrapper-content {
    height:auto;
  }
  .card-informacoes {
  border-radius: 20px;
  height: 75vh;
}
}
</style>
