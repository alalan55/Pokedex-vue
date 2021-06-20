<template>
  <header>
    <nav>
      <div class="logo">
        <img src="../assets/logoPoke.png" alt="" />
      </div>
    </nav>
  </header>
</template>
<style scoped>
header {
  /* background: black; */
  width: 100%;
  height: 70px;
  -webkit-box-shadow: -3px 6px 37px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 6px 37px -17px rgba(0, 0, 0, 0.75);
  box-shadow: -3px 6px 37px -17px rgba(0, 0, 0, 0.75);
  margin-bottom: 25px;
  /* position: fixed; */
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}
.logo {
  height: 70px;
}
.logo img {
  width: 12em;
}
</style>