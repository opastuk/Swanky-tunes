<template>
 <div>
   <div class="main-logo">
     <div class="main-logo__background">
       <div class="main-logo__flare">
         <div class="main-logo__img"></div>
       </div>
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

<style scoped>
  @media (min-width: 768px) {
    .main-logo {
      width: 100%;
    }
    .main-logo__background {
      width: 650px;
      height: 420px;
      margin: 0 auto;
      background-color: #d9d9d9;
      position: relative;
      z-index: 1;
    }
    .main-logo__flare {
      width: 90px;
      height: 520px;
      background-color: #ffffff;
      position: absolute;
      transform: rotate(20deg) translateY(-50%);
      animation: timing 3s infinite;
      top: 50%;
      left: -45%;
      z-index: 2;
    }
    @keyframes timing {
      100%{
        left: 100%;
        margin-left: 1%;
      }
    }
  }
</style>
