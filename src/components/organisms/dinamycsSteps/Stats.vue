<template>
  <div class="galeria">
    <div class="btns-acoes">
      <div class="item" v-for="(stat, index) in statsData" :key="index">
        <span class="title">
          {{ stat.stat.name }}
        </span>
        <input
          type="range"
          :name="stat.stat.name"
          id=""
          :value="stat.base_stat"
          disabled
        />
        <span class="value-range">
          {{ stat.base_stat }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    pokeInfo: { type: Object },
  },
  setup(props) {
    const statsData = ref([]);

    function initData() {
      console.log(props.pokeInfo.stats);
      statsData.value = props.pokeInfo.stats;
    }
    initData();

    return { statsData };
  },
};
</script>

<style scoped>
.galeria {
  border: 1px solid red;
  overflow: hidden;
}
.itens-galeria {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

