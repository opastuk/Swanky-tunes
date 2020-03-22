<template>
 <div class="main-logo">
   <img class="main-logo__img" src="../assets/img/pic.png"
          alt="Swanky Tunes">
 </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class mainLogo extends Vue {
}
</script>

<style scoped lang="less">
  .main-logo {
    &__img {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .main-logo {
      width: 100%;
      &__img {
        display: block;
        position: absolute;
        z-index: 0;
        top: -283px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  @media (min-width: 850px) {
    .main-logo {
      width: 100%;
      position: relative;
      &__img {
        width: 100%;
        position: absolute;
        z-index: 0;
        top: -283px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
