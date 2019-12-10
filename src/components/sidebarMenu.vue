<template>
<div class="sidebar">
  <navMenuHome class="sidebar__nav-menu"/>
  <footerMenuHome class="sidebar__footer-menu"/>
</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import footerMenuHome from '@/components/footerMenuHome.vue';
import navMenuHome from '@/components/navMenuHome.vue';

@Component({
  components: { navMenuHome, footerMenuHome },
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
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
    }/*
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
    }
  }
</style>
