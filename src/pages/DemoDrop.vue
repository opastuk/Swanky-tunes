<template>
	<div class="demo-drop">
		<div class="demo-drop__container">
			<h1 class="visually-hidden">
				Demo drop
			</h1>
			<navMenu />
			<demoForm />
			<div class="footer-menu__wrapper">
				<footerMenu />
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import demoForm from '@/components/demoForm.vue';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';

@Component({
	components: { demoForm, navMenu, footerMenu },
})
export default class DemoDrop extends Vue {
}
</script>

<style scoped lang="less">
  .demo-drop {
    height: 100%;
		background-color: #e9eef1;
		&__container {
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			height: 100%;
		}
  }
  @media (min-width: 920px) {
    .demo-drop {
			.main-background();
      min-height: 620px;
			&__container {
				width: 100%;
			}
    }
  }

	@media (min-width: 900px) {
		.demo-drop__container {
			width: 950px;
			margin: 0 auto;
		}
	}

</style>
