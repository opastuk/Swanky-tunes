<template>
  <div class="home">
    <div class="container home__wrapper">
      <h1 class="visually-hidden">Swanky Tunes</h1>
      <navMenu/>
      <mainLogo class="main-logo"></mainLogo>
      <footerMenuHome class="footer-menu"/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import mainLogo from '@/components/mainLogo.vue';
import footerMenuHome from '@/components/footerMenuHome.vue';

@Component({
  components: { navMenu, mainLogo, footerMenuHome },
})
export default class Home extends Vue {
}
</script>

<style scoped lang="less">
  .home {
    .fullscreen();
    background-image: url("../assets/img/mobile-pic.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (min-width: 768px) {
      .main-background();
    }
    max-height: 100%;
    &__wrapper {
      .flex-layout();
      .fix-height();
    }
  }
  .container {
    @media (min-width: 768px) {
      width: 790px;
      height: 100vh;
      margin: 0 auto;
    }
    @media (min-width: 900px) {
      width: 910px;
    }
  }
  .footer-menu {
    position: relative;
    z-index: 2;
  }
</style>
