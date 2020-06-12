<template>
	<div class="not-found">
		<div class="not-found__text">
			404 Not Found
		</div>
		<button>
			<router-link
				to="/"
				class="back"
			>
				На главную
			</router-link>
		</button>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NotFound extends Vue {

}
</script>

<style scoped lang='less'>
.not-found {
  .fullscreen();
  .main-background();
  display: flex;
  justify-content: center;
  align-items: center;
	flex-direction: column;
  &__text {
    font-size: 50px;
		margin-bottom: 25px;
  }
}

	.back {
		text-decoration: none;
		color: #333333;
	}
</style>
