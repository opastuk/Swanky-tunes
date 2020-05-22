<template>
	<div
		class="track"
		:style="trackCoverStyle"
		:class="{'play': !isPausedNow}"
	>
		<div class="track-cover__wrapper">
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
				type="button"
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
				>
					<buy
						width="35"
						height="35"
					/>
				</a>
			</div>
			<div class="track__additional">
				<span class="track__producer">{{ song.producer }}</span>
				<span class="track__year">{{ song.year }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import buy from '@/assets/img/svg/buy.svg';
import { Howl, Howler } from 'howler';

  @Component({
  	components: {
  		buy,
  	},
  })
export default class musicTrack extends Vue {
    @Prop(Object) song;

    isPausedNow = true;
    isTrackPlayed = false;

    player = {};

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

    loadEnds() {
    	this.$nextTick(() => {
    		this.$emit('loaded');
    	});
    }

    play() {
    	if (!this.isTrackPlayed) {
    		this.player = new Howl({
    			src: [this.audio],
    			onplay: () => this.isPausedNow = false,
    			onpause: () => this.isPausedNow = true,
    			onstop: () => this.isPausedNow = true,
    		});
    		this.isTrackPlayed = true;
    	}
    	this.player.play();
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

		&__main-descr {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

    &__producer {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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

      &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        top: 5px;
        left: 5px;
        background-color: #ffffff;
        width: 62px;
        height: 62px;
      }
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

  @media (min-width: 768px) {

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

        &::before {
          content: '';
          position: absolute;
          border-radius: 50%;
          top: 5px;
          left: 5px;
          background-color: #ffffff;
          width: 62px;
          height: 62px;
        }
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
</style>
