<template>
  <section class="elements">
    <!-- <InputSearch :placeholder="placeholder" v-model="pokeName"/>
    <BtnSubmit :value="valorSubmit"/> -->
    <Pesquisa />

    <CardContainer class="card__container">
      <Card
        v-for="poke in pokes"
        :pokeId="poke.id"
        :key="poke.id"
        :pokeName="poke.name"
        :pokeImg="poke.sprites.front_default"
        :pokeType="poke.types[0].type.name.toString()"
      />
    </CardContainer>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { CardContainer } from "@/components/bosons";
import { Pesquisa } from "@/components/templates";
import { Card } from "@/components/organisms";

export default {
  name: "Home",
  components: {
    Pesquisa,
    CardContainer,
    // InputSearch,
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
    ...mapActions(["getPokes", "loadNext"]),
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
  },
  mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
      window.removeEventListener("scroll", this.handleScroll);
    }
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
