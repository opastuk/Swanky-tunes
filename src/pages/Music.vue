<template>
	<div class="music">
		<div class="music__container">
			<navMenu />
			<music-cards />
			<footerMenu />
		</div>
	</div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import MusicCards from '@/components/MusicCards.vue';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';

@Component({
	components: { navMenu, footerMenu, MusicCards },
})
export default class Music extends Vue {
}
</script>
<style scoped lang="less">
  .music {
    height: 100%;
		background-color: #e9eef1;
		&__container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
		}
  }

	@media (min-width: 770px) {
		.music {
			.main-background();
      &__container {
				width: 100%;
			}
		}
	}

	@media (min-width: 900px) {
		.music__container {
			width: 950px;
			margin: 0 auto;
		}
	}
</style>
