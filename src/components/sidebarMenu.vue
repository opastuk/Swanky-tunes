<template>
<div class="sidebar">
  <navMenu/>
  <footerMenu/>
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
      padding: 0 20px 15px;
    }
  }
  @media (min-width: 768px) {
    .sidebar {
      display: none;
    }
  }
</style>
