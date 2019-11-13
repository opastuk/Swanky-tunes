<template>
  <div class="home">
    Это главная
    <navMenu></navMenu>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';

@Component({
  components: { navMenu },
})
export default class Home extends Vue {
}
</script>
