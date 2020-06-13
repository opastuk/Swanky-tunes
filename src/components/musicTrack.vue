<template>
	<div
		class="track"
		:style="trackCoverStyle"
		:class="{'play': !isPausedNow}"
	>
		<div
			class="track-cover__wrapper"
		>
			<img
				class="track__cover"
				:class="{'play': !isPausedNow}"
				:src="trackCover"
				alt="Track cover"
				@load="loadEnds"
			/>
			<audio
				ref="audioPlayer"
				muted
				class="track__audio"
			/>
			<div
				class="track-control__button"
				:class="{
					'loading': loading
				}"
			>
				<img
					v-if="isPausedNow"
					class="track-control__icon"
					width="72"
					height="72"
					src="../assets/img/play.png"
					@click="play"
				/>
				<img
					v-if="!isPausedNow"
					class="track-control__icon"
					width="72"
					height="72"
					src="../assets/img/pause.png"
					@click="pause"
				/>
			</div>
		</div>
		<div class="track__info">
			<div class="track__main-descr">
				<p class="track__name">
					{{ song.name }}
				</p>
				<a
					:href="buySong"
					target="_blank"
					rel="noopener"
					class="track__buy-button"
				>
					<buy
						width="35"
						height="35"
					/>
				</a>
			</div>
			<div class="track__additional">
				<span
					class="track__producer"
				>
					<p
						v-for="(producer, index) in producerName"
						:key="index"
						:style="fs"
						class="producer__name"
					>{{ producer }} {{ index === producerName.length - 1 ? '' : '&' }}</p>
				</span>
				<span class="track__year">{{ song.year }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import buy from '@/assets/img/svg/buy.svg';
import { Howl, Howler } from 'howler';
import {mapState} from 'vuex';

  @Component({
  	components: {
  		buy,
  	},
  	computed:	mapState({
  		lang: state => state.lang,
  	})
  })
export default class musicTrack extends Vue {
    @Prop(Object) song;

    isPausedNow = true;
    isTrackPlayed = false;
    loading = false;

    player = {};
    fs = {};

    get trackCoverStyle() {
    	return { '--hover': this.song.hover };
    }

    get trackCover() {
    	return `http://swanky-admin.tmweb.ru${this.song.track_cover[0].url}`;
    }

    get audio() {
    	return `http://swanky-admin.tmweb.ru${this.song.audio[0].url}`;
    }

    get buySong() {
    	return this.song.buy_link;
    }

    get producerName() {
    	let producer = this.song.producer.split('&');

    	if (producer.length >= 3){
    		this.fs = {fontSize: `${((200/producer.length)).toFixed()}%`};
    	}

    	return producer	;
    }

    loadEnds() {
    	this.$nextTick(() => {
    		this.$emit('loaded');
    	});
    }

    play() {
    	if (!this.isTrackPlayed) {
    		this.player = new Howl({
    			src: [this.audio],
    			onplay: () => {
    				this.isPausedNow = false;
    				this.loading = false;
    			},
    			onpause: () => this.isPausedNow = true,
    			onstop: () => this.isPausedNow = true,
    			onload: () => this.loading = false,
    		});
    		this.isTrackPlayed = true;
    	}
    	this.loading = true;
    	new Promise((resolve) => {
    		this.player.play();
    		resolve();
    	}).then((_) => this.player.onload);
    	this.$emit('playing', this.player);
    }

    pause(){
    	this.player.pause();
    }
  }
</script>

<style scoped lang="less">
  p{
    margin: 0;
  }
  .track {
    height: 100%;
    width: auto;
    box-sizing: initial;
    margin: 0;
    padding: 10px;
    font-weight: 200;
    font-size: 20px;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    &:hover,
    &:focus {
      background-color: var(--hover);
      color: #ffffff;
    }
    &:hover .track__cover {
      filter: grayscale(0%);
    }
    &:hover .track__info {
      border-bottom: 1px solid #ffffff;
    }

		&__buy-button {
			cursor: pointer;
		}

		&__main-descr {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

    &__producer {
			display: flex;
			flex-direction: column;
    }

    &__year {
      height: fit-content;
      align-self: flex-end;
    }
    &__cover {
      width: 100%;
      height: auto;
      transition: filter  ease-in-out;
      filter: grayscale(99%);
    }

    &__info {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 10px;
      flex-basis: 140px;
      border-bottom: 1px solid #000000;
    }

    &__name {
      margin-top: 2px;
    }

    &__additional {
      display: flex;
      justify-content: space-between;
    }
  }

  .track-control {
    &__button {
      position: absolute;
      border: none;
      border-radius: 50%;
      height: 72px;
      width: 72px;
      top: 50%;
      left: 50%;
			-webkit-mask-image: -webkit-radial-gradient(white, black);
      transform: translate(-50%, -50%);
      cursor: pointer;
    }

    &__icon {
      position: relative;
    }
  }
  .play {
    background-color: #476776;
    color: #ffffff;
    filter: grayscale(0%);
  }
  .track-cover__wrapper {
    position: relative;
    height: 50%;
    width: 100%;
  }

  @media (min-width: 770px) {

    .track {
      margin-bottom: 15px;
      position: relative;
      width: auto;
      height: 100%;

      &__info {
        flex-grow: 1;
      }

      &__audio {
        display: none;
      }
    }

    .track-control {
      &__button {
        position: absolute;
        border: none;
        border-radius: 50%;
        height: 72px;
        width: 72px;
        top: 50%;
        left: 50%;
				-webkit-mask-image: -webkit-radial-gradient(white, black);
        transform: translate(-50%, -50%);
      }

      &__icon {
        position: relative;
      }
    }

    .play {
      background-color: #476776;
      color: #ffffff;
      filter: grayscale(0%);

    }
  }

  @media (min-width: 1160px) {

    .track {
      flex-basis: 25%;
    }
  }

	.loading {
		opacity: .6;
	}

	.producer__name {
		margin: 0;
    line-height: 1;
	}

</style>
