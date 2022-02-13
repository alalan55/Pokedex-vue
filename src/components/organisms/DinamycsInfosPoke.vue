<template>
  <div class="dinamycs">
    <div class="wrapper-dinamycs">
      <div class="headers">
        <div
          class="item-header"
          :class="{ active: state == 0 }"
          @click="state = 0"
        >
          <span class="title-item">Habilidades</span>
        </div>
        <div
          class="item-header"
          :class="{ active: state == 1 }"
          @click="state = 1"
        >
          <span class="title-item">Fotos</span>
        </div>
        <div
          class="item-header"
          :class="{ active: state == 2 }"
          @click="state = 2"
        >
          <span class="title-item">Stats</span>
        </div>
        <div
          class="item-header"
          :class="{ active: state == 3 }"
          @click="state = 3"
        >
          <span class="title-item">Tipos</span>
        </div>
      </div>

      <div class="components">
        <keep-alive>
          <component
            v-bind:pokeInfo="pokemonInfo"
            :is="components[state]"
          ></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Habilidades from "./dinamycsSteps/Habilidades.vue";
import Fotos from "./dinamycsSteps/Fotos.vue";
import Stats from "./dinamycsSteps/Stats.vue";
import Tipos from "./dinamycsSteps/Tipos.vue";
export default {
  components: {
    Habilidades,
    Fotos,
    Stats,
    Tipos,
  },
  props: {
    pokemonInfo: { type: Object, required: true },
  },
  setup() {
    const state = ref(0);
    const components = ["Habilidades", "Fotos", "Stats", "Tipos"];

    return { state, components };
  },
};
</script>

<style  scoped>
.dinamycs {
  height: 100%;
  width: 100%;
}

.headers {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.headers > div {
  flex: 1 1 150px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
  background: rgb(86, 191, 209);
  color: white;
}
.headers > div span {
  font-weight: 600;
}
.wrapper-dinamycs {
  /* border: 1px solid red; */
}
.wrapper-dinamycs > div {
  /* border: 1px solid; */
}
.wrapper-dinamycs .components {
  margin: 0.5rem 0;
}
.active {
  background: rgb(61, 131, 143) !important;
}
</style>