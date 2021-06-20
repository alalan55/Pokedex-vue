<template>
    <div class="card">
      <div class="title">
        <h2>{{ pokeName}}</h2>
       
        <small>#{{ pokeId }}</small>
      </div>
      <div class="img" :class="pokeType">
        <img :src="pokeImg" :alt="pokeName" />
      </div>
      <div class="type">
         <p>{{ pokeType }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        props:['pokeName', 'pokeId','pokeType','pokeImg'],
    }
</script>

<style lang="css" scoped>
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
    width: 120px;
  }
}

</style>