<template>
	<div>
		<div class="demo">
			<form
				class="form"
				action="#"
				method="get"
			>
				<label
					class="form__label visually-hidden"
					for="name"
				>Name</label>
				<input
					id="name"
					class="demo__input"
					type="text"
					name="name"
					placeholder="Name:"
					required
				/>
				<label
					class="form__label visually-hidden"
					for="email"
				>Email</label>
				<input
					id="email"
					class="demo__input"
					name="email"
					placeholder="Email:"
					type="email"
					autocomplete="off"
					required
				/>
				<label
					class="form__label visually-hidden"
					for="url"
				>Music URL</label>
				<input
					id="url"
					class="demo__input"
					name="url"
					placeholder="Music URL:"
					type="text"
					autocomplete="off"
					required
				/>
				<label
					class="form__label visually-hidden"
					for="comment"
				>Comment</label>
				<input
					id="comment"
					class="demo__input"
					name="comment"
					placeholder="Comment:"
					type="text"
				/>
				<button
					class="form__button"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class demoForm extends Vue {
}
</script>

<style scoped lang="less">
.demo {
  .flex-container();
  &__input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 15px;
    margin-bottom: 35px;
    border: 1px solid #000000;
    background-color: transparent;
    font-size: 20px;
  }
  &__input:focus,
  &__input:active {
    outline: none;
    border: 1px solid #c8c8c8;
  }
  &__input::placeholder {
    color: #000000;
  }
}
.form {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  &__button {
    width: 65px;
    padding: 0;
    background-color: transparent;
    border: none;
    position: relative;
    font-size: 20px;
  }
  &__button:focus {
    outline: none;
    border: none;
  }
  &__button::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #000000;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__button:focus::after,
  &__button:hover::after {
    content: "";
    display: none;
  }
}

@media (min-width: 768px) {
  .demo {
    width: 580px;
    &__input {
      height: 55px;
    }
  }
}
</style>
