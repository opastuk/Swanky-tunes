<template>
<div class="sidebar">
  <navMenu class="sidebar__nav-menu"/>
  <footerMenu class="sidebar__footer-menu"/>
</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import footerMenu from '@/components/footerMenu.vue';
import navMenu from '@/components/navMenu.vue';

@Component({
  components: { navMenu, footerMenu },
})
export default class SidebarMenu extends Vue {
}
</script>

<style scoped lang="less">
  @media (max-width: 768px) {
    .sidebar {
      width: 40%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: #000000;
      opacity: 0.8;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      z-index: 1;
    }
    /*.sidebar__nav-menu {*/
    /*  margin: 0 auto;*/
    /*}*/
    /*.sidebar__footer-menu {*/
    /*  margin: 0 auto;*/
    /*}*/
  }
  @media (min-width: 768px) {
    .sidebar {
      display: none;
      z-index: 1;
    }
  }
</style>
