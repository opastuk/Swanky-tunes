<template>
    <div>
      <div class="track">
        <div class="track-cover__wrapper">
          <img class="track__cover" src="../assets/img/game-time.png" alt="Track cover">
        </div>
        <div class="track__info">
          <p class="track__name">Game Time</p>
          <span class="track__producer">Swanky Tunes, NSSND, Lexblaze</span>
          <span class="track__year">2019</span>
        </div>
      </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class musicTrack extends Vue {
}
</script>

<style scoped lang="less">
@media (min-width: 768px) {
  .track {
    width: 340px;
    height: 485px;
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
