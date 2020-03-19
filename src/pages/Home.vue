<template>
  <div class="home">
    <div class="container home__wrapper">
      <h1 class="visually-hidden">Swanky Tunes</h1>
      <navMenu/>
      <mainLogo class="main-logo"></mainLogo>
      <footerMenu/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import mainLogo from '@/components/mainLogo.vue';
import footerMenu from '@/components/footerMenu.vue';

@Component({
  components: { navMenu, mainLogo, footerMenu },
})
export default class Home extends Vue {
}
</script>

<style scoped lang="less">
  .home {
    .main-background();
    .fullscreen();
  }
  .home__wrapper {
    .flex-layout();
    min-height: 550px;
  }
  .container {
    @media (min-width: 768px) {
      width: 760px;
      height: 100vh;
      margin: 0 auto;
    }
  }
</style>
