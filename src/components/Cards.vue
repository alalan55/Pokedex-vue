<template>


  <div class="cards">
    <div class="card" v-for="poke of pokemons" :key="poke.id" @click="goTo(poke.id)">
      <div class="title">
        <h2>{{ poke.name }}</h2>
       
        <small>#{{ poke.id }}</small>
      </div>
      <div class="img" :class="poke.types[0].type.name.toString()">
        <img :src="poke.sprites.front_default" alt="{{poke.name}}" />
      </div>
      <div class="type">
         <p>{{ poke.types[0].type.name.toString() }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter();

    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    let pokemons = ref([]);
    //let type = ref('');

     function goTo(id){
       console.lo
      router.push(`/about/${id}`)
    }

    async function requestBase() {
      try {
        await fetch(BASE_URL).then((data) => {
          data.json().then((value) => {
            // console.log(value);
            value.results?.forEach((element) => {
              requestUnico(element.url);
            });
          });
        });
      } catch (error) {
        console.error("ops, tivemos um error", error);
      }
    }

    async function requestUnico(val) {
      await fetch(val).then((data) => {
        data
          .json()

          .then((value) => {
            pokemons.value.push(value)
          });
      });
    }
   
    requestBase();

    return {
      pokemons,
      goTo,

      
    };
  },
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 auto; */
  /* border: 1px solid; */
}
/* .card{
    flex: 0 1 auto;
    border: 1px solid;
    margin: .5em .1em;
    padding: .5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    transition: .2s ease-in-out;
}
.card-img img{
    width: 9em;
}
.card-name{
    margin: 5px 0;
    padding: 3px;
    border: 1px solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card:hover{
    -webkit-box-shadow: -3px 6px 37px -17px rgba(0,0,0,0.75);
-moz-box-shadow: -3px 6px 37px -17px rgba(0,0,0,0.75);
box-shadow: -3px 6px 37px -17px rgba(0,0,0,0.75);
} */

.cards {
  display: flex;
  flex-wrap: wrap;
}
.card:hover {
  cursor: pointer;
}
.card {
  width: calc(25% - 20px);
  margin: 10px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #1e1e1e;
  border: 1px solid;
}
.card .title h2 {
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  color: white;
}
.title small {
  color: white;
}
.card .type {
  color: white;
  border-radius: 10px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
}
.card .img {
  margin: 40px auto;
  width: 220px;
  height: 220px;
  /* background: var(--fire); */
  border-radius: 50%;
  background-size: 400% 400%;
  background-position: 0 0;
  /* animation: bg-out 300ms ease-in forwards 1; */
  transition: 0.3s ease-in-out;
}
.card:hover .img {
  /* animation: bg-in 300ms ease-in forwards 1; */
}
.card .img img {
  width: 200px;
  /* max-width: 220px; */
  transition: 0.3s ease-in-out;
}
.card .type p {
  margin: 0;
}

/* até o tamanho de 1244px  tablets */
@media screen and (max-width: 1244px) {
  .card {
    width: calc(50% - 20px);
  }
}

/* até o tamanho de 768px  celulares */
@media screen and (max-width: 768px) {
  .card {
    width: calc(100% - 20px);
  }
}

/** para celulares pequenos */
@media screen and (max-width: 355px) {
  .card .img {
    width: 120px;
    height: 120px;
  }
  .card .img img {
    /* border: 1px solid;
        width: 10px; */
    width: 120px;
  }
}
</style>
