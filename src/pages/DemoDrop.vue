<template>
  <div class="demo-drop">
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import demoForm from '@/components/demoForm.vue';

@Component({
  components: { demoForm },
})
export default class Contacts extends Vue {
}
</script>

<style scoped lang="less">
  .demo-drop {
    .fullscreen();
    .main-background();
  }
  @media (min-width: 768px) {
    .demo-drop {
      display: flex;
      flex-direction: column;
      justify-content: center;
    } /*ВРЕМЕННО*/
  }
</style>
