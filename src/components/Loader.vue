<template>
	<div
		class="music-cards__loader-container"
	>
		<img
			height="34"
			width="100"
			class="music-cards__loader"
			src="../assets/img/loader.gif"
			alt="loading..."
		/>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

  @Component({})
export default class Loader extends Vue{
  };
</script>

<style scoped lang="less">
	.music-cards {
		&__loader-container {
			width: 100%;
			height: 100%;
			display: flex;
		}

		&__loader {
			margin: auto;
		}
	}
</style>
