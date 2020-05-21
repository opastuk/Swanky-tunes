<template>
	<div class="footer-navigation">
		<ul class="footer-navigation__list--mobile">
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link--mobile"
					href="https://vk.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Vk</span>
					<vkm
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link--mobile"
					href="https://www.instagram.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Instagram</span>
					<instm
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link--mobile"
					href="https://www.facebook.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Facebook</span>
					<fbm
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link--mobile"
					href="https://www.youtube.com/swankytuneslive"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Youtube</span>
					<youtubem
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link--mobile"
					href="https://twitter.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Twitter</span>
					<twitterm
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
		</ul>
		<ul class="footer-navigation__list">
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://vk.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Vk</span>
					<vk
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://www.instagram.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Instagram</span>
					<inst
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://www.facebook.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Facebook</span>
					<fb
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://www.youtube.com/swankytuneslive"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Youtube</span>
					<youtube
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://twitter.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Twitter</span>
					<twitter
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://soundcloud.com/swankytunes"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Soundcloud</span>
					<sndcld
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://itunes.apple.com/us/artist/swanky-tunes/19588.."
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Apple music</span>
					<apple
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://open.spotify.com/artist/06cLuOP0p7VAnBnqil1eW.."
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Spotify</span>
					<spotify
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
			<li class="footer-navigation__item">
				<a
					class="footer-navigation__link"
					href="https://www.beatport.com/artist/swanky-tunes/24923"
					target="_blank"
					rel="noopener"
				>
					<span class="visually-hidden">Beatport</span>
					<beatport
						class="footer-navigation__icon"
						width="45"
						height="45"
					/>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import vk from '@/assets/img/svg/vk.svg';
import inst from '@/assets/img/svg/inst.svg';
import fb from '@/assets/img/svg/fb.svg';
import youtube from '@/assets/img/svg/youtube.svg';
import twitter from '@/assets/img/svg/twitter.svg';
import sndcld from '@/assets/img/svg/sndcld.svg';
import apple from '@/assets/img/svg/apple.svg';
import spotify from '@/assets/img/svg/spotify.svg';
import beatport from '@/assets/img/svg/beatport.svg';
import vkm from '@/assets/img/svg/vk-m.svg';
import instm from '@/assets/img/svg/instagram-m.svg';
import fbm from '@/assets/img/svg/fb-m.svg';
import youtubem from '@/assets/img/svg/utube-m.svg';
import twitterm from '@/assets/img/svg/twitter-m.svg';

@Component({
	components: {
		vk,
		inst,
		fb,
		youtube,
		twitter,
		sndcld,
		apple,
		spotify,
		beatport,
		vkm,
		instm,
		fbm,
		youtubem,
		twitterm,
	},
})
export default class footerMenu extends Vue {
}
</script>

<style scoped lang="less">
  .footer-navigation {
    &__list {
      display: none;
      &--mobile {
        .reset-list();
        width: 90%;
        padding: 10px 0 7px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media (min-width: 768px) {
    .footer-navigation {
      .flex-container();
      &__list {
        .reset-list();
        max-width: 910px;
        padding: 15px 0;
        display: flex;
        flex-wrap: wrap;
				margin: 0 auto;
        justify-content: space-between;
        &--mobile {
          display: none;
        }
      }
      &__icon:hover {
        transform: scale(1.2);
        transition: 1s;
      }
    }
  }
</style>
