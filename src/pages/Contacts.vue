<template>
	<div class="contacts">
		<div class="contacts__container">
			<h1 class="visually-hidden">
				Contacts
			</h1>
			<navMenu />
			<contactsMain class="contacts__list" />
			<div class="footer-menu__wrapper">
				<footerMenu />
			</div>
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
		background-color: #e9eef1;
		&__container {
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			height: 100%;
		}
  }
  .contacts__list {
    display: flex;
    align-items: center;
    flex-basis: 405px;
    flex-grow: 2;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  @media (min-width: 920px) {
    .contacts {
			.main-background();
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
			&__container {
				width: 100%;
			}
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

	@media (min-width: 900px) {
		.contacts__container {
			width: 950px;
      margin: 0 auto;
		}
	}
</style>
