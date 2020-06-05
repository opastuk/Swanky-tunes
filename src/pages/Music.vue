<template>
	<div class="music">
		<navMenu />
		<music-cards />
		<footerMenu />
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
		background-color: #e9eef1;
  }

	@media (min-width: 768px) {
		.music {
			.main-background();
		}
	}
</style>
