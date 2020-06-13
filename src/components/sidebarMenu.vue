<template>
	<div class="sidebar">
		<ul class="sidebar__list">
			<!--	<li class="sidebar__item">
				<router-link
					class="sidebar__link"
					to="/music"
				>
					{{ descr.menu.music }}
				</router-link>
			</li>-->
			<li class="sidebar__item">
				<a
					class="sidebar__link"
					href="https://www.youtube.com/playlist?list=PL9W0uKtpnSDAb9NvRcxbosp5DzKWT2wGo"
					target="_blank"
					rel="noopener"
				>{{ descr.menu.video }}</a>
			</li>
			<li class="sidebar__item">
				<router-link
					class="sidebar__link"
					to="/dates"
				>
					{{ descr.menu.dates }}
				</router-link>
			</li>
			<li class="sidebar__item main-navigation__item--dropdown">
				<a
					class="sidebar__link sidebar__link--dropdown"
					href="#"
					@click="social = !social"
				>{{ descr.menu.radio }}</a>
				<ul
					v-if="social"
					class="sidebar__list social"
				>
					<li class="sidebar__item social">
						<a
							class="sidebar__link"
							href="https://podcasts.apple.com/ru/podcast/swanky-tunes-showland-podcast/id923114101"
							target="_blank"
							rel="noopener"
						>
							<span class="visually-hidden">Apple podcasts</span>
							<applpdcst
								class="sidebar__icon"
								width="40"
								height="40"
							/>
						</a>
					</li>
					<li class="sidebar__item social">
						<a
							class="sidebar__link"
							href="https://www.mixcloud.com/swankytunes/"
							target="_blank"
							rel="noopener"
						>
							<span class="visually-hidden">Mixcloud</span>
							<mixcloud
								class="sidebar__icon"
								width="40"
								height="40"
							/>
						</a>
					</li>
				</ul>
			</li>
			<li class="sidebar__item">
				<router-link
					class="sidebar__link"
					to="/demo-drop"
				>
					{{ descr.menu.demo }}
				</router-link>
			</li>
			<li class="sidebar__item">
				<router-link
					class="sidebar__link"
					to="/contacts"
				>
					{{ descr.menu.contacts }}
				</router-link>
			</li>
			<li class="sidebar__item">
				<a
					class="sidebar__link"
					style="cursor: pointer"
					@click="setRus"
				>
					RU
				</a>
				|
				<a
					class="sidebar__link"
					style="cursor: pointer"
					@click="setEn"
				>
					EN
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

import mixcloud from '@/assets/img/svg/mixcloud-white.svg';
import applpdcst from '@/assets/img/svg/apple_podcast-white.svg';
import { mapState } from 'vuex';

@Component({
	components: {
		mixcloud, applpdcst,
	},
	computed:	mapState({
		descr: state => state.descr,
	})
})
export default class SidebarMenu extends Vue {
  social = false;

  setEn() {
  	this.$store.commit('setTranslation', 'en');
  }

  setRus() {
  	this.$store.commit('setTranslation', 'ru');
  }
}
</script>

<style scoped lang="less">
  @media (max-width: 770px) {
    .sidebar {
      width: 40%;
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 1;
      background-color: #000000;
      opacity: 0.8;
      &__list {
        .reset-list();
        margin-top: 65px;
        text-align: right;

        .social {
          margin-top: 5px;
          padding-bottom: 0;
        }
      }
      &__item {
        color: #ffffff;
        padding-bottom: 15px;
      }
      &__link {
        .reset-link();
        color: #ffffff;
      }
    }
  }
  @media (min-width: 770px) {
    .sidebar {
      display: none;
    }
  }
</style>
