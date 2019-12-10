<template>
  <div class="track">
    <div class="track-cover__wrapper">
      <img class="track__cover" :src="song.poster" alt="Track cover">
      <audio class="track__audio" src="#" controls/>
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

  @Component
export default class musicTrack extends Vue {
    @Prop(Object) song
  }
</script>

<style scoped lang="less">
  .track {
    width: 300px;
    box-sizing: border-box;
    padding: 10px 10px 15px;
    margin-bottom: 30px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .track__audio {
    position: absolute;/*TEMPORARY*/
    z-index: 1;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    display:none;
  }
  .track__name,
  .track__producer,
  .track__year {
    .reset-text();
    font-size: 26px;
  }
  .track__info {
    position: relative;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .track__info::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #000000;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  .track:hover .track__info::after {
    background-color: #ffffff;
  }
  .track__year {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .track__name  {
    padding-bottom: 15px;
  }
  .track:hover,
  .track:focus {
    background-color: #476776;
    color: #ffffff;
  }
  .track__additional {
    width: 230px;
  }
  @media (min-width: 768px) {
    .track {
      margin-bottom: 15px;
      position: relative;
      width: 340px;
      min-height: 480px;
    }
    .track-cover__wrapper {
      width: 320px;
    }
    .track__info {
      width: 320px;
    }
    .track__audio {
      display: none;
    }
    .track:hover .track__audio,
    .track:focus .track__audio{
      display: block;
    }/*temporary*/
  }
</style>
