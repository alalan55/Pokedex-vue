<template>
<h1> {{$route.params.id}}</h1>
  <div class="container" v-if="pokemon">
    <div class="conteudo-poke" >
      <div class="card-poke">
        <div class="img-poke">
          <img
            :src="pokemon.sprites?.front_default"
            :alt="pokemon.name"
          />
        </div>
        <div class="nome-poke">
          <h2>{{pokemon.name}}</h2>
        </div>
      </div>
    </div>
    <!-- cards falando sobre: altura, peso, categoria, habilidades,  -->
    <div class="cards-bottom">
      <div class="lado-esquerdo">
        <div class="text-galeria">
          <span>Galeria</span>
        </div>
        <div class="galeria">
          <img
            :src="pokemon.sprites.back_default"
            alt=""
          />
          <img
            :src="pokemon.sprites.front_shiny"
            alt=""
          />
          <img
            :src="pokemon.sprites.front_default"
            alt=""
          />
        </div>
      </div>
      <div class="lado-direito">
        <div class="card">
          <h1>carde 1</h1>
        </div>
        <div class="card">
          <h1>carde 1</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data(){
    return{
      BASE_URL : "https://pokeapi.co/api/v2/pokemon/",
      id: this.$route.params.id,
      pokemon: {}

    }
  },
  created(){
      this.buscarDados()
  },
  methods:{
    async buscarDados(){
      const retorno = await fetch(`${this.BASE_URL}${this.id}`);
      const valor = await retorno.json();
      this.pokemon = valor;

      console.log(valor)
    }
  }
};
</script>
<style scoped>
.container {
  /* border: 1px solid; */
  width: 100%;
}
.card-poke {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
}
.img-poke {
  margin: 40px auto;
  width: 180px;
  height: 180px;
  background: #9dd465;
  border-radius: 50%;
  background-size: 400% 400%;
  background-position: 0 0;
}
.img-poke img {
  max-width: 180px;
  transition: 0.3s ease-in-out;
}
.cards-bottom {
  width: 100%;
  display: flex;
  /* border: 1px solid; */
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: .5em;
}
.cards-bottom > div {
  flex: 1 1 auto;

  margin: 2px;
  /* padding: 3em; */
  border-radius: 15px;
}
.lado-esquerdo {
  padding: 3em;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.galeria {
  margin-top: 1em;
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.galeria img {
  width: 6em;
  /* border: 1px solid; */
  margin: 0 10px;
}
.lado-direito {
  display: flex;
  border: none;
  flex-wrap: wrap;
}
.lado-direito > div {
  border-radius: 15px;
  padding: 3em;
  border: 1px solid;
  flex: 1 1 auto;
  margin-right: 2px;
}

@media screen and (max-width: 480px) {
  .galeria img {
    max-width: 40%;
  }
  .lado-direito>div{
    margin-top: .8em;
  }
}
</style>
