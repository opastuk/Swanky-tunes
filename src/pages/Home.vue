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
    .main-background();
    .fullscreen();
    max-height: 100%;
    &__wrapper {
      .flex-layout();
      .fix-height();
    }
  }
  .container {
    @media (min-width: 768px) {
      width: 765px;
      height: 100vh;
      margin: 0 auto;
    }
    @media (min-width: 1100px) {
      width: 910px;
    }
  }
  .footer-menu {
    position: relative;
    z-index: 2;
  }
</style>
