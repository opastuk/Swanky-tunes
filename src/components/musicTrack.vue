<template>
  <div class="track" :class="{'play': isPlayNow}">
    <div class="track-cover__wrapper">
      <img class="track__cover" :class="{'play': isPlayNow}" :src="song.poster" alt="Track cover">
      <audio ref="audioPlayer" class="track__audio" preload="metadata">
        <source src="../../public/02633.mp3" type="audio/ogg">
      </audio>
      <div class="track-control__button" @click="play" type="button">
        <play v-if="!isPlayNow" width="45" height="45"/>
        <pause v-if="isPlayNow" width="45" height="45"/>
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

    isPlayNow = false;

    play() {
      const player = this.$refs.audioPlayer;
      if (this.isPlayNow) {
        player.pause();
        this.isPlayNow = !this.isPlayNow;
      } else {
        player.play().then(() => this.isPlayNow = !this.isPlayNow);
      }
    }
  }
</script>

<style scoped lang="less">
  .track {
    position: relative;
    width: 300px;
    box-sizing: border-box;
    padding: 10px 7px 15px;
    margin-bottom: 30px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:hover,
    &:focus {
      background-color: #476776;
      color: #ffffff;
    }
    &:hover .track__info::after {
      background-color: #ffffff;
    }
    &:hover .track__cover {
      filter: grayscale(0%);
    }
    &__cover {
      width: 285px;
      transition: filter  ease-in-out;
      filter: grayscale(99%);
    }
    &__audio {
      position: absolute;/*TEMPORARY*/
      z-index: 1;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70px;
      display:none;
    }
    &__name,
    &__producer,
    &__year {
      .reset-text();
      font-size: 26px;
    }
    &__info {
      position: relative;
      min-height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #000000;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &__year {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &__name  {
      padding-bottom: 15px;
    }
    &__additional {
      width: 230px;
    }
  }
  @media (min-width: 768px) {
    .track {
      margin-bottom: 15px;
      position: relative;
      width: 340px;
      min-height: 480px;
      &__cover {
        width: 320px;
      }
      &__info {
        width: 320px;
      }
      &__audio {
        display: none;
      }
      &:hover .track__audio,
      &:focus .track__audio{
        display: block;
      }/*temporary*/
    }
  }
  .track-control {
    &__button {
      position: absolute;
      border: none;
      border-radius: 50%;
      height: 45px;
      width: 45px;
      top: 30%;
      left: 43%;
      background-color: #ffffff;
    }
  }
  .play {
    background-color: #476776;
    color: #ffffff;
    filter: grayscale(0%);
  }
</style>
