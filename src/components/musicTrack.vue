<template>
  <div class="track" :class="{'play': !isPausedNow}">
    <div class="track-cover__wrapper">
      <img class="track__cover"
           :class="{'play': !isPausedNow}"
           :src="song.poster"
           alt="Track cover">
      <audio ref="audioPlayer" class="track__audio" preload="metadata">
        <source src="../../public/02633.mp3" type="audio/ogg">
      </audio>
      <div class="track-control__button" @click="play" type="button">
        <play class="track-control__icon" v-if="isPausedNow" width="90" height="90"/>
        <pause class="track-control__icon" v-if="!isPausedNow" width="90" height="90"/>
      </div>
    </div>
    <div class="track__info">
      <p class="track__name">{{song.name}}</p>
      <div class="track__additional">
        <span class="track__producer">{{song.author}}</span>
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
    min-height: 401px;
    position: relative;
    padding: 6px;
    display: flex;
    flex: 0 1 270px;
    flex-flow: column nowrap;
    font-weight: 200;
    font-size: 26px;
    &:hover,
    &:focus {
      background-color: #476776;
      color: #ffffff;
    }
    &:hover .track__cover {
      filter: grayscale(0%);
    }
    &:hover .track__info::after {
      background-color: #ffffff;
    }
    &__cover {
      width: 100%;
      transition: filter  ease-in-out;
      filter: grayscale(99%);
    }

    &__info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 10px;
      &::after {
        content: "";
        width: 96%;
        height: 1px;
        background-color: #000000;
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__name {
      margin-top: 2px;
      margin-bottom: 82px;
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
      top: 26%;
      left: 37%;

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

  @media (min-width: 768px) {
    .track {
      margin-bottom: 15px;
      position: relative;
      width: 340px;
      min-height: 508px;
      &__cover {
        width: 320px;
      }
      &__info {
        width: 320px;
        flex-grow: 1;
      }
      &__audio {
        display: none;
      }
    }
  }
  .track-control {
    &__button {
      position: absolute;
      border: none;
      border-radius: 50%;
      height: 90px;
      width: 90px;
      top: 26%;
      left: 37%;

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
</style>
