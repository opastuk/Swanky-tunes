<template>
  <div class="dates">
    <navMenu></navMenu>
    <div class="footer-menu__wrapper">
      <footerMenu></footerMenu>
    </div>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';
@Component({
  components: { navMenu, footerMenu },
})
export default class TourDates extends Vue {
}
</script>
<style scoped lang="less">
  .dates {
    .main-background();
    .fullscreen();
    .flex-layout();
  }
  .footer-menu__wrapper {
    .flex-container();
  }
</style>
