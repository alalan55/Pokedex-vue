<template>
  <div class="galeria" v-if="filtered">
    <div class="btns-acoes">
      <div class="btn-voltar" @click="voltar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-left"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="11" y2="18" />
          <line x1="5" y1="12" x2="11" y2="6" />
        </svg>
      </div>
      <div class="btn-ir" @click="avancar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-right"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="13" y1="18" x2="19" y2="12" />
          <line x1="13" y1="6" x2="19" y2="12" />
        </svg>
      </div>
    </div>
    <figure class="itens-galeria">
      <img
        :src="filtered[stateGallery]?.img"
        :alt="filtered[stateGallery]?.id"
      />
    </figure>
  </div>
  <div class="not-found" v-else>
      <span>Fotos não encontradas</span>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    pokeInfo: { type: Object },
  },
  setup(props) {
    const stateGallery = ref(0);

    const pokeImages = computed(() =>
      Object.keys(props.pokeInfo.sprites).map((item) => {
        let data = "";
        if (typeof props.pokeInfo.sprites[item] == "string") {
          data = {
            img: props.pokeInfo.sprites[item],
            id: item,
          };
        }

        return data;
      })
    );

    const filtered = pokeImages.value.filter((i) => i);

    function avancar() {
      if (stateGallery.value <= filtered.length - 2) {
        stateGallery.value++;
      }
    }

    function voltar() {
      if (stateGallery.value >= 1) {
        stateGallery.value--;
      }
    }

    return { stateGallery, avancar, voltar, filtered };
  },
};
</script>

<style scoped>
.galeria {
  /* height: 55vh; */
  overflow: hidden;
  position: relative;
}
.btns-acoes {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btns-acoes>div{
    cursor: pointer;
}
.itens-galeria {
  display: flex;
  align-items: center;
  justify-content: center;
}
.not-found{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>

