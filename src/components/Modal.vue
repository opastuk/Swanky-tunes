<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<p
					v-if="!error"
					class="modal-text"
				>
					{{ descr.demoForm.modal.success }}
				</p>
				<p
					v-else
					class="modal-text"
				>
					{{ descr.demoForm.modal.error }}
				</p>

				<button
					class="modal-default-button"
					@click="$emit('close')"
				>
					OK
				</button>
			</div>
		</div>
	</transition>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

  @Component({
  	computed:	mapState({
  		descr: state => state.descr,
  	})
  })
export default class Modal extends Vue{
  	@Prop(Boolean) error;
  };
</script>

<style scoped lang="less">
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: opacity 0.3s ease;
	}

	.modal-wrapper {
		width: 30%;
		height: 100px;
		background-color: #ffffff;
		padding: 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		border-radius: 5px;
	}

	.modal-container {
		width: 100%;
		height: 100%;
	}

	.modal-header h3 {
		margin-top: 0;
		color: #42b983;
	}

	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	.modal-default-button{
		color: #ffffff;
		background-color: #000000;
		border: none;
		height: 40px;
		width: 90px;
		border-radius: 15px;
		outline: none;
	}
</style>
