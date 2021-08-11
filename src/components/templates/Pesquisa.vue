// NÃO ESTA SENDO USADO
<template>
  <div class="pesquisa">
    <h1>estou usando esse componente</h1>
    <InputSearch :placeholder="placeholder" v-model="pokeName" />
    <BtnSubmit :value="valorSubmit" />
  </div>
</template>

<script>
import { InputSearch, BtnSubmit } from "@/components/atoms";
export default {
  data() {
    return {
      placeholder: "Pesquise um pokemon",
      valorSubmit: "Pesquisar",
      pokeName: ''
    };
  },
  components: {
    InputSearch,
    BtnSubmit,
  },
};
</script>

<style lang="css" scoped>
</style>