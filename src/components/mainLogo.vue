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
<<<<<<< HEAD
=======
  @media (min-width: 768px) {
    .main-logo {
      width: 100%;
    }
    .main-logo__background {
      width: 750px;
      height: 400px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }
    .main-logo__texture {
      width: 100%;
    }
    .main-logo__flare {
      width: 90px;
      height: 520px;
      background-color: #ffffff;
      position: absolute;
      transform: rotate(20deg) translateY(-50%);
      animation: timing 2s infinite;
      top: 50%;
      left: -190px;
      z-index: 2;
    }
    @keyframes timing {
      100%{
        left: 100%;
        margin-left: 1%;
      }
    }
    .main-logo__img {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
    }

  }
>>>>>>> master
</style>
