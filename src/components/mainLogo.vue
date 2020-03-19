<template>
 <div class="main-logo">
    <img class="main-logo__img" src="../assets/img/pic.png"
         alt="Swanky Tunes" width="876" height="756">
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
        z-index: 0;
        top: -283px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
