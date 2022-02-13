<template>
  <div class="galeria">
    <div class="btns-acoes">
      <div class="item" v-for="(stat, index) in statsData" :key="index">
        <span class="title">
          {{ stat.stat.name }}
        </span>

        <div class="slider-content">
           <input
        class="slider"
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
.item{
  margin: .5rem 0;
}
.item .title{
  margin: .2rem 0;
  display: block;
  font-weight: 500;
}
.itens-galeria {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 12px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}
.value-range{
  padding: 0 .5rem;
  font-size: .8em;
}
</style>

