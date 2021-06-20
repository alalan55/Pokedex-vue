<template>
  <section class="elements">
    <input type="text" class="pesquisar" placeholder="Pesquise um pokemon" />
    <input type="submit" value="Pesquisar" />

    <Cards />
  </section>
</template>

<script>
// @ is an alias to /src
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,  
    Cards,
  },
};
</script>

<style scoped>
.elements {
  /* border: 1px solid; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em;
}
.pesquisar {
  width: 100%;
}

input[type="text"] {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 15px;

  color: #333;
  font-size: 18px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  background-color: #f3f3f3;
  transition: 0.4s;
}
input[type="text"]::placeholder {
  color: #888;
  transition: 0.4s;
}
input[type="submit"] {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 25px;
  transition: .2s ease-in-out;
}
input[type="submit"]:hover{
  background-color: #3a3939;
}

input[type="submit"]:focus label {
  color: #ea526f;
}
</style>
