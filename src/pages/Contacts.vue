<template>
  <div class="contacts">
    <h1 class="visually-hidden">Контакты</h1>
    <contactsMain></contactsMain>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import contactsMain from '@/components/contactsMain.vue';

@Component({
  components: { contactsMain },
})
export default class Contacts extends Vue {
}
</script>

<style scoped lang="less">
  .contacts {
    .main-background();
    .fullscreen();
  }
  @media (min-width: 768px) {
    .contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }/*ВРЕМЕННО*/
  }

</style>
