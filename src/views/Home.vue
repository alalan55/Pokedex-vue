<template>
  <section class="elements">
    <InputSearch
      @onkeypress="pesquisarPokemonUnico"
      placeholder="Pesquise por um pokemon"
    />

    <CardContainer class="card__container">
      <Card
        v-for="poke in pokes"
        :pokeId="poke.id"
        :key="poke.id"
        :pokeName="poke.name"
        :pokeImg="poke.sprites.front_default"
        :pokeType="poke.types[0].type.name.toString()"
        @click="go(poke.id)"
      />
    </CardContainer>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { CardContainer } from "@/components/bosons";
import { Card } from "@/components/organisms";
import { InputSearch } from "@/components/atoms";

export default {
  name: "Home",
  components: {
    // Pesquisa,
    CardContainer,
    InputSearch,
    Card,
    // BtnSubmit
  },
  data() {
    return {
      placeholder: "Pesquise um pokemon",
      valorSubmit: "Pesquisar",
    };
  },
  created() {
    this.start();
  },
  computed: {
    pokes() {
      return this.$store.getters.$pokemons;
    },
  },
  methods: {
    ...mapActions(["getPokes", "loadNext", "addPokeSearch"]),
    async start() {
      await this.$store.dispatch("getPokes");
    },
    async morePokes() {
      await this.loadNext();
    },
    async handleScroll() {
      let element = document.querySelector(".card__container");
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        await this.morePokes();
      }
    },
    async pesquisarPokemonUnico(e) {
      let url = `https://pokeapi.co/api/v2/pokemon/${e}`;

      try {
        let req = await fetch(url);
        let res = await req.json();
        this.addPokeSearch(res);
      } catch (error) {
        console.error(error);
      }
    },
    go(e){
      this.$router.push(`/about/${e}`)
      console.log(e)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.elements {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em;
}
</style>
