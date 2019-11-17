<template>
  <div class="music">
    <navMenu></navMenu>
    <div class="music__wrapper">
      <musicTrack :link=""></musicTrack>
    </div>
    <div class="footer-menu__wrapper">
      <footerMenu></footerMenu>
    </div>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';
import musicTrack from '@/components/musicTrack.vue';
@Component({
  components: { navMenu, footerMenu, musicTrack },
})
export default class Music extends Vue {
}
</script>
<style scoped lang="less">
  .music {
    .fullscreen();
    .flex-layout();
    .main-background();
  }
  @media (min-width: 768px) {
    .music__wrapper {
      .flex-container();
    }
    .footer-menu__wrapper {
      .flex-container();
    }
  }
</style>
