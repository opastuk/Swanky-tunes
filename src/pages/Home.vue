<template>
  <div class="home">
    <div class="container home__wrapper">
      <h1 class="visually-hidden">Swanky Tunes</h1>
      <navMenu class="navigation-menu"/>
      <mainLogo class="main-logo"></mainLogo>
      <img class="home__main-photo" src="../assets/img/mobile-pic.png" alt="Swanky">
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
    background-color: #e1e6ea;
    @media (min-width: 768px) {
      .main-background();
    }
    height: 100%;
    &__wrapper {
      .flex-layout();
      .fix-height();
      width: 100%;
    }

    &__main-photo {
      position: absolute;
      height: 100vh;
      width: 100vw;
      object-fit: contain;
      z-index: 0;
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
    z-index: 2;
  }

  .navigation-menu {
    z-index: 2;
  }
</style>
