<template>
  <div class="track" :class="{'play': !isPausedNow}">
    <div class="track-cover__wrapper">
      <img class="track__cover"
           :class="{'play': !isPausedNow}"
           :src="trackCover"
           alt="Track cover">
      <audio ref="audioPlayer" class="track__audio" preload="metadata">
        <source :src="audio" type="audio/ogg">
      </audio>
      <div class="track-control__button" @click="play" type="button">
        <play class="track-control__icon" v-if="isPausedNow" width="90" height="90"/>
        <pause class="track-control__icon" v-if="!isPausedNow" width="90" height="90"/>
      </div>
    </div>
    <div class="track__info">
      <p class="track__name">{{song.track_name}}</p>
      <div class="track__additional">
        <span class="track__producer">{{song.track_producer}}</span>
        <span class="track__year">{{song.year}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import play from '@/assets/img/svg/play.svg';
import pause from '@/assets/img/svg/pause.svg';

  @Component({
    components: {
      play,
      pause,
    },
  })
export default class musicTrack extends Vue {
    @Prop(Object) song;

    isPausedNow = true;

    player = {};

    get trackCover() {
      return `http://swanky-admin.tmweb.ru${this.song.track_cover[0].url}`;
    }

    get audio() {
      return `http://swanky-admin.tmweb.ru${this.song.audio[0].url}`;
    }

    mounted() {
      this.player = this.$refs.audioPlayer;
      this.player.preload = 'auto';
      this.player.onplaying = () => {
        this.isPausedNow = false;
        this.$emit('playing', this.song.id);
      };
    }

    play() {
      if (!this.player.paused) {
        this.player.pause();
      } else if (this.player.paused && this.player.readyState) {
        this.player.play();
      }
      this.player.onplaying = () => {
        this.isPausedNow = false;
        this.$emit('playing', this.song.id);
      };
      this.player.onended = () => {
        this.isPausedNow = true;
        this.$emit('ended', this.song.id);
      };
      this.player.onpause = () => {
        this.isPausedNow = true;
      };
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
    font-size: 26px;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    &:hover,
    &:focus {
      background-color: #476776;
      color: #ffffff;
    }
    &:hover .track__cover {
      filter: grayscale(0%);
    }
    &:hover .track__info {
      border-bottom: 1px solid #ffffff;
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
      height: 90px;
      width: 90px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        top: 5px;
        left: 5px;
        background-color: #ffffff;
        width: 80px;
        height: 80px;
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
        height: 90px;
        width: 90px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &::before {
          content: '';
          position: absolute;
          border-radius: 50%;
          top: 5px;
          left: 5px;
          background-color: #ffffff;
          width: 80px;
          height: 80px;
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
