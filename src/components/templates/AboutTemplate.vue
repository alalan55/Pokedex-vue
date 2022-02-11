<template>
  <div class="container" v-if="pokemon">
    <div class="card-informacoes">
      <div class="img-poke">
        <figure>
            <img :src="pokemon.sprites?.front_default" :alt="pokemon.name" />
        </figure>

      </div>
      <div class="dinamycs-components">

      </div>

    </div>


        <!-- <CardAbout :pokemon="pokemon"/> -->
 
  </div>
  <div v-else>Carregando...</div>
</template>
<script>
//import {CardAbout} from '@/components/organisms'
export default {
  components: {
    //  CardAbout,
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

      // console.log(this.pokemon.abilities[0].ability.name)
    }
  }
}
</script>
<style  scoped>
.container {
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 2rem;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-informacoes{
  border-radius: 20px;
  border: 1px solid blue;
  min-height: 75vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.card-informacoes>div{
  border-radius: 20px;
  min-height: 75vh;
  flex: 1 1 200px;
}
.img-poke{
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-poke figure{
  width: 100%;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-poke figure img{
  width: 80%;
}


</style>
