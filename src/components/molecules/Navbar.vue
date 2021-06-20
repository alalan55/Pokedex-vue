<template>
  <nav>
    <div class="logo">
      <Logo :alt="alt" />
    </div>
  </nav>
</template>

<script>
import { Logo } from "@/components/atoms";
export default {
  data() {
    return {
      alt: "Logo do poke-vue",
    };
  },
  components: {
    Logo,
  },
};
</script>

<style lang="css" scoped>
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
</style>