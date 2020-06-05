<template>
	<div class="contacts">
		<h1 class="visually-hidden">
			Contacts
		</h1>
		<navMenu />
		<contactsMain class="contacts__list" />
		<div class="footer-menu__wrapper">
			<footerMenu />
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import contactsMain from '@/components/contactsMain.vue';
import footerMenu from '@/components/footerMenu.vue';
import navMenu from '@/components/navMenu.vue';

@Component({
	components: { contactsMain, footerMenu, navMenu },
})
export default class Contacts extends Vue {
}
</script>

<style scoped lang="less">
  .contacts {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  .contacts__list {
    display: flex;
    align-items: center;
    flex-basis: 405px;
    flex-grow: 2;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  @media (min-width: 768px) {
    .contacts {
			.main-background();
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }
    .contacts__list {
      display: flex;
      align-items: center;
      flex-basis: auto;
      flex-grow: 1;
      overflow-y: auto;
      overflow-x: auto;
    }
  }
</style>
