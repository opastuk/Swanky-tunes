<template>
	<div class="demo-drop">
		<h1 class="visually-hidden">
			Demo drop
		</h1>
		<navMenu />
		<demoForm />
		<div class="footer-menu__wrapper">
			<footerMenu />
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
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    .demo-drop {
      min-height: 620px;
    }
  }
</style>
