<template>
	<div class="dates">
		<div class="dates__container">
			<navMenu />
			<tour-dates />
			<footerMenu />
		</div>
	</div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';
@Component({
	components: {
		navMenu,
		footerMenu,
		tourDates: () => import('@/components/tourdates.vue'),
	},
})
export default class TourDates extends Vue {
}
</script>
<style scoped lang="less">
  .dates {
    height: 100%;
		background-color: #e9eef1;
		&__container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
		}
  }

	@media (min-width: 768px) {
		.dates {
			.main-background();
			&__container {
				width: 100%;
			}
		}
	}

	@media (min-width: 900px) {
		.dates__container	{
			width: 910px;
			margin: 0 auto;
		}
	}
</style>
