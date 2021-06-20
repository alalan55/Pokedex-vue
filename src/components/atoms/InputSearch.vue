<template>
    <input type="text" class="pesquisar" :placeholder="placeholder" :value="modelValue"  @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:{
            placeholder: {Type: String, required: true},
            modelValue: String
        }
    }
</script>

<style lang="css" scoped>
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
</style>