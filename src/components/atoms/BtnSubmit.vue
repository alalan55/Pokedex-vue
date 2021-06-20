<template>
     <input type="submit" :value="valor" />
</template>

<script>
    export default {
        props:{
            valor: {Type: String}
        }
    }
</script>

<style lang="css" scoped>

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