<template>
 <div class="main-logo">
    <img class="main-logo__img" src="../assets/img/pic.png"
         alt="Swanky Tunes" width="1100" height="656">
 </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class mainLogo extends Vue {
}
</script>

<style scoped lang="less">
  @media (min-width: 768px) {
    .main-logo {
      width: 100%;
      position: relative;
      &__img {
        position: absolute;
        top: -200px;
        left: -160px;
      }
    }
  }
</style>
