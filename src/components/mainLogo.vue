<template>
 <div>
   <div class="main-logo">
     <div class="main-logo__background">
       <img class="main-logo__texture" src="../assets/img/logo-bg.png">
       <div class="main-logo__flare"></div>
     </div>
     <div class="main-logo__img-container">
       <img class="main-logo__img" src="../assets/img/logo.png" alt="Swanky Tunes" width="760">
     </div>
   </div>
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
      margin-bottom: 250px; /*временно*/
    }
    .main-logo__background {
      width: 748px;
      height: 420px;
      margin: 0 auto;
      position: relative;
    }
    .main-logo__texture {
      width: 100%;
      height: auto;
      top: 0;
    }
    /*.main-logo__flare {
      width: 90px;
      height: 520px;
      background-color: #ffffff;
      position: absolute;
      transform: rotate(20deg) translateY(-50%);
      animation: timing 3s infinite;
      top: 50%;
      left: -190px;
      z-index: 2;
    }
    @keyframes timing {
      100%{
        left: 100%;
        margin-left: 1%;
      }
    }*/
    .main-logo__img {
      position: absolute;
      top: 200px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
    }

  }
</style>
