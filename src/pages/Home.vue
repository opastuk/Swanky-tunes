<template>
	<div class="home">
		<loader
			v-show="!loaded"
			class="loader"
		/>
		<div
			v-show="loaded"
			class="container home__wrapper"
		>
			<h1 class="visually-hidden">
				Swanky Tunes
			</h1>
			<navMenu class="navigation-menu" />
			<img
				class="home__main-photo"
				src="../assets/img/mobile-pic.png"
				alt="Swanky"
				@load="ready"
			/>
			<img
				class="home__desktop-main-photo"
				src="../assets/img/pic.png"
				alt="Swanky Tunes"
			/>
			<footer-menu class="footer-menu" />
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import Loader from '@/components/Loader.vue';
import FooterMenu from '@/components/footerMenu.vue';

@Component({
	components: { navMenu, FooterMenu, Loader },
})
export default class Home extends Vue {
	loaded = false;
	ready(){
		this.loaded = true;
	}
}
</script>

<style scoped lang="less">
  .home {
    .fullscreen();
    background-color: #e9eef1;
    @media (min-width: 768px) {
      .main-background();
    }
    height: 100%;
    &__wrapper {
      .flex-layout();
      .fix-height();
      width: 100%;
      height: 100%;
    }

    &__main-photo {
      position: absolute;
      height: 90%;
      width: 90%;
      object-fit: contain;
      z-index: 0;
			left: 50%;
			margin-top: 5%;
			margin-left: -45%;
      @media (min-width: 768px) {
        display: none;
      }
    }

    &__desktop-main-photo {
      display: none;
      position: absolute;
      width: 100%;
			max-height: 90%;
      object-fit: contain;
      z-index: 0;
      bottom: 0;

      @media (min-width:768px) {
        display: inline-block;
      }
      @media (min-width: 1200px) {
        bottom: 0;
      }
    }
  }
  .container {
    position: relative;
    @media (min-width: 768px) {
      width: 100%;
      margin: 0 auto;
      height: 100%;
    }
    @media (min-width: 900px) {
      width: 910px;
    }
  }
  .footer-menu {
    z-index: 2;
  }

  .navigation-menu {
    z-index: 2;
  }
</style>
