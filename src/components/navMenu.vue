<template>
	<div class="nav-menu">
		<nav class="main-navigation">
			<router-link
				class="main-navigation__link--logo"
				to="/"
			>
				<span class="main-navigation__logo">Swanky Tunes</span>
			</router-link>
			<button
				class="main-navigation__toggle"
				@click="showSideBar"
			>
				<sidemenu
					width="25"
					height="25"
					:fill="fillColor"
				/>
			</button>
			<transition name="slide">
				<sidebarMenu v-if="sideBar" />
			</transition>
			<ul class="main-navigation__list">
				<!--				<li class="main-navigation__item">-->
				<!--					<router-link-->
				<!--						class="main-navigation__link"-->
				<!--						to="/music"-->
				<!--					>-->
				<!--						{{ descr.menu.music }}-->
				<!--					</router-link>-->
				<!--				</li>-->
				<li class="main-navigation__item">
					<a
						class="main-navigation__link"
						href="https://www.youtube.com/playlist?list=PL9W0uKtpnSDAb9NvRcxbosp5DzKWT2wGo"
						target="_blank"
						rel="noopener"
					>{{ descr.menu.videos }}</a>
				</li>
				<li class="main-navigation__item">
					<router-link
						class="main-navigation__link"
						to="/dates"
					>
						{{ descr.menu.dates }}
					</router-link>
				</li>
				<li class="main-navigation__item main-navigation__item--dropdown">
					<a
						class="main-navigation__link--dropdown"
						href="#"
					>{{ descr.menu.radio }}</a>
					<ul class="sub-navigation__list">
						<li class="sub-navigation__item">
							<a
								class="sub-navigation__link"
								href="https://podcasts.apple.com/ru/podcast/swanky-tunes-showland-podcast/id923114101"
								target="_blank"
								rel="noopener"
							>
								<span class="visually-hidden">Apple podcasts</span>
								<applpdcst
									class="main-navigation__icon"
									width="40"
									height="40"
								/>
							</a>
						</li>
						<li class="sub-navigation__item">
							<a
								class="sub-navigation__link"
								href="https://www.mixcloud.com/swankytunes/"
								target="_blank"
								rel="noopener"
							>
								<span class="visually-hidden">Mixcloud</span>
								<mixcloud
									class="main-navigation__icon"
									width="40"
									height="40"
								/>
							</a>
						</li>
					</ul>
				</li>
				<li class="main-navigation__item">
					<router-link
						class="main-navigation__link"
						to="/demo-drop"
					>
						{{ descr.menu.demo }}
					</router-link>
				</li>
				<li class="main-navigation__item">
					<router-link
						class="main-navigation__link"
						to="/contacts"
					>
						{{ descr.menu.contacts }}
					</router-link>
				</li>
			</ul>
			<span class="lang">
				<a
					class="main-navigation__link"
					style="cursor: pointer"
					@click="setRus"
				>
					RU
				</a>
				|
				<a
					class="main-navigation__link"
					style="cursor: pointer"
					@click="setEn"
				>
					EN
				</a>
			</span>
		</nav>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import sidebarMenu from '@/components/sidebarMenu.vue';
import sidemenu from '@/assets/img/svg/menu.svg';
import mixcloud from '@/assets/img/svg/mixcloud.svg';
import applpdcst from '@/assets/img/svg/apple_podcast.svg';
import { mapState } from 'vuex';

@Component({
	components: {
		sidebarMenu, sidemenu, mixcloud, applpdcst,
	},
	computed:	mapState({
		descr: state => state.descr,
	})
})
export default class NavMenu extends Vue {
  sideBar = false;

  fillColor = '#000';

  showSideBar() {
  	this.sideBar = !this.sideBar;
  	if (this.fillColor === '#000') {
  		this.fillColor = '#fff';
  	} else {
  		this.fillColor = '#000';
  	}
  }

  setEn() {
  	this.$store.commit('setTranslation', 'en');
  }

  setRus() {
  	this.$store.commit('setTranslation', 'ru');
  }
}
</script>

<style scoped lang="less">
  .nav-menu {
    height: 76px;
  }
	.lang {
		display: none;
	}
  .main-navigation {
    .flex-container();
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    &__list {
      display: none;
    }
    &__link {
      .reset-link();
      color: #000000;
      font-weight: 200;
      &--logo {
        .reset-link();
        color: #000000;
        font-weight: 200;
      }
    }
    &__toggle {
      width: 25px;
      height: 25px;
      padding: 0;
      border: none;
      position: relative;
      z-index: 2;
      outline: none;
      background-color: transparent;
    }
  }
  @media (min-width: 770px) {
    .nav-menu {
      height: auto;
      width: 100%;
    }
		.lang {
			display: inline-block;
		}
    .main-navigation {
      padding: 30px 0 26px;
      &__logo {
        white-space: nowrap;
        position: relative;
        &:hover,
        &:focus {
          outline: none;
        }
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #000000;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: width .3s ease-in-out;
        }
        &:hover::after,
        &:focus::after {
          width: 100%;
        }
      }
      &__toggle {
        display: none;
      }
      &__list {
        .reset-list();
        width: 70%;
        display: flex;
        justify-content: space-between;
      }
      &__link {
        position: relative;
        &:hover,
        &:focus {
          outline: none;
        }
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #000000;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: width .3s ease-in-out;
        }
        &:hover::after,
        &:focus::after {
          width: 100%;
        }
      }
      &__item--dropdown {
        position: relative;
        &:hover .sub-navigation__list {
          .flex-layout();
          align-items: center;
        }
      }
      &__link--dropdown {
        .reset-link();
        color: #000000;
        font-weight: 200;
      }
    }
    .sub-navigation__list {
      .reset-list();
      box-sizing: border-box;
      border: 1px solid #000000;
      background-color: #f9f9f9;
      padding: 15px;
      width: 90px;
      height: 125px;
      position: absolute;
      z-index: 1;
      left: 50%;
      transform: translateX(-50%);
      display: none;
    }
    .sub-navigation__link {
      display: block;
      width: 40px;
      height: 40px;
      &__link:hover,
      &__link:focus {
        outline: none;
        transform: scale(1.2);
        transition: 1s;
      }
    }
  }

  .slide-enter-active {
    animation: slide-left .5s;
  }

  .slide-leave-active {
    animation: slide-right .5s;
  }

  @keyframes  slide-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes  slide-right {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

</style>
