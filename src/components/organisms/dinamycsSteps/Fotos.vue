<template>
  <div class="galeria">
      <h1>{{stateGallery}}</h1>
    <div class="btns-acoes">
      <button @click="avancar">Ir</button>
      <button @click="voltar">Voltar</button>
    </div>
    <figure class="itens-galeria" >
      <img
        :src="filtered[stateGallery]?.img"
        :alt="filtered[stateGallery]?.id"
      />
    </figure>
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

    console.log(pokeImages.value)

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
  border: 1px solid red;
  height: 55vh;
  overflow: hidden;
}
.itens-galeria {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

