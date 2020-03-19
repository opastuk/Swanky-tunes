<template>
  <div class="home">
    <navMenu/>
    <mainLogo/>
    <footerMenu/>
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
</style>
