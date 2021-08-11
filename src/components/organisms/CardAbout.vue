<template>
  <div class="peso">
            <span>Peso</span>
            <p>{{ $peso }} kg</p>
          </div>
          <div class="altura">
            <span>Altura</span>
            <p>{{ $altura }} m</p>
          </div>
          <div class="habilidades">
            <span>Habilidades</span>
            <p>{{ pokemon.abilities[0].ability.name }}</p>
          </div>
  <div class="card-poke">

    <div class="name-and-id">
      <h3>
        <span class="name">{{ pokemon.name }}</span>
        <span class="id"> Nº{{ pokemon.id }}</span>
      </h3>
    </div>

    <div class="container-poke">
      <figure class="img">
        <img :src="pokemon.sprites?.front_default" :alt="pokemon.name" />
      </figure>
        <div class="atributes">
           
        </div>


    </div>

  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  computed: {
    $peso() {
      return (this.pokemon.weight * 10) / 100;
    },
    $altura() {
      return (this.pokemon.height * 10) / 100;
    },
  },
};
</script>

<style  scoped>
.card-poke {
  border: 1px solid red;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.name-and-id {
  border: 1px solid;
  text-align: center;
}
.name-and-id h3 {
  font-size: 2.5rem;
  font-weight: 400;
}
.id {
  color: #616161;
}
.container-poke {
  display: flex;
  border: 1px solid;
  height: 100%;
}
.img {
  width: 100%;
  border: 1px solid;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img img {
  width: 20rem;
}
.atributes {
  width: 100%;
  border: 1px solid;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.atributes>div{
    flex: 1 1 100px;
}

</style>