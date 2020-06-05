<template>
	<div class="dates">
		<navMenu />
		<tour-dates />
		<footerMenu />
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
		.main-background();
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

	@media (min-width: 768px) {
		.dates {
			.main-background();
		}
	}
</style>
