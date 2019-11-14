<template>
  <div class="home">
    <div class="container">
      <navMenu></navMenu>
      <mainLogo class="main-logo"></mainLogo>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import mainLogo from '@/components/mainLogo.vue';

@Component({
  components: { navMenu, mainLogo },
})
export default class Home extends Vue {
}
</script>

<style scoped lang="less">
  .home {
    background-color: #000000;
    width: 100%;
    height: 100vh;
  }
  .container {
    @media (min-width: 768px) {
      width: 760px;
      height: 100vh;
      margin: 0 auto;
    }
  }
</style>
