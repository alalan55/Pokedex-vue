<template>
  <div class="habilidades-wrapper">
    <div class="title">
      <span>Habilidades</span>
    </div>

    <div class="habilidades">
      <div
        class="habilidade"
        v-for="(habilidade, index) in pokeInfo.abilities"
        :key="index"
      >
        <span class="name-habilidade">{{ habilidade.ability.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokeInfo: { type: Object },
  },
};
</script>

<style  scoped>
.habilidades-wrapper {
  border: 1px solid red;
  height: 100%;
  color: white;
  height: 40vh;
}
.title {
  margin: 0.5rem 0;
}
.title span {
  font-weight: 700;
}
.habilidade {
  margin: 0.5rem 0;
}
.habilidade span {
  font-weight: 500;
}
</style>