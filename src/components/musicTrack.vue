<template>
    <div>
      <div class="track">
        <div class="track-cover__wrapper">
          <img class="track__cover" :src="song.poster" alt="Track cover">
        </div>
        <div class="track__info">
          <p class="track__name">{{song.name}}</p>
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
@media (min-width: 768px) {
  .track {
    position: relative;
    width: 335px;
    min-height: 480px;
    box-sizing: border-box;
    padding: 10px;
  }
  .track:hover,
  .track:focus {
    background-color: #9c8994;
  }
  .track-cover__wrapper {
    width: 320px;
    margin: 0 auto;
  }
}
</style>
