<template>
  <section class="elements">
    <InputSearch
      @onkeypress="pesquisarPokemonUnico"
      placeholder="Pesquise por um pokemon"
    />
    <div class="message-error" v-if="pokeNotFound">
      <span>Pokemon não encontrado</span>
    </div>
    <div class="message-warning" v-if="pokeExist">
      <span>Pokemon já está na lista</span>
    </div>

    <CardContainer class="card__container">
     
      <Card
        v-for="poke in pokes"
        :key="poke.id"
        :pokeImg="poke.sprites.front_default"
        :pokeType="poke.types[0].type.name.toString()"
        :pokemon="poke"
        @click="goToDetail(poke.id, poke.types[0].type.name.toString())"
      />
      <div class="loading" v-if="loading">
        <h1 >
        Carregando...
      </h1>
      </div>
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
    CardContainer,
    InputSearch,
    Card,
  },
  props: ["pokes"],
  data() {
    return {
      placeholder: "Pesquise um pokemon",
      valorSubmit: "Pesquisar",
      pokeNotFound: false,
      pokeExist: false,
      loading: false,
    };
  },
  methods: {
    ...mapActions(["loadNext", "addPokeSearch"]),

    async morePokes() {
      this.loading = true
      await this.loadNext();
      this.loading = false
    },
    async handleScroll() {
      let element = document.querySelector(".card__container");
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        await this.morePokes();
      }
    },
    async pesquisarPokemonUnico(e) {
      let url = `https://pokeapi.co/api/v2/pokemon/${e}`;
      let req = undefined;

      try {
        req = await fetch(url);
        let res = await req.json();

        !this.pokes.find((e) => e.id == res.id)
          ? this.addPokeSearch(res)
          : this.timeOutMesageExist();
      } catch (error) {
        console.error(error);
        this.timeOutMesage();
      }
    },
    timeOutMesage() {
      this.pokeNotFound = true;
      setTimeout(() => {
        this.pokeNotFound = false;
      }, 5000);
    },
    timeOutMesageExist() {
      this.pokeExist = true;
      setTimeout(() => {
        this.pokeExist = false;
      }, 5000);
    },
    goToDetail(e, poketype) {
      this.$router.push({ name: "About", params: { id: e, poketype: poketype } });
    },
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
.message-error {
  text-align: center;
  background: rgb(221, 77, 77);
  color: white;
  padding: 0.7rem 0;
  border-radius: 5px;
}
.message-warning {
  text-align: center;
  background: rgb(201, 186, 47);
  color: white;
  padding: 0.7rem 0;
  border-radius: 5px;
}
.elements {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em;
}


@media screen and (max-width: 1244px) {
  .loading {
    width: calc(50% - 20px);
    display: flex;
    align-items: center;
    padding: .5rem;
  }
}

/* até o tamanho de 768px  celulares */
@media screen and (max-width: 768px) {
  .loading {
    width: calc(100% - 20px);
        display: flex;
    align-items: center;
    padding: .5rem;
  }
}
</style>
