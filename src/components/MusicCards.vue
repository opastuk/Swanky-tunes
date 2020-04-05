<template>
  <div class="music-cards__wrapper">
    <div class="music-cards__container">
      <div class="music-cards__item" v-for="(song, index) in songCard" :key="index">
    <music-track
                 :song="song" @playing="preventOthers"
                 @ended="nextTrack" />
      </div>
  </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import musicTrack from '@/components/musicTrack.vue';

@Component({
  components: { musicTrack },
})
export default class MusicCards extends Vue {
  songCard = [];

  nowPlaying = {};

  songs = [];

  indexOfPlaying = null;

  mounted() {
    axios.get('http://swanky-admin.tmweb.ru/music')
      .then((response) => {
        this.songCard = response.data;
      });
  }

  nextTrack(songId) {
    const justEnded = this.songCard.find(el => el.id === songId);
    const indexOfEnded = this.songCard.indexOf(justEnded);
    this.songs[indexOfEnded + 1].play();
  }

  preventOthers(songId) {
    this.songs = document.getElementsByTagName('audio');
    this.nowPlaying = this.songCard.find(el => el.id === songId);
    this.indexOfPlaying = this.songCard.indexOf(this.nowPlaying);

    this.songs.forEach((el, index) => {
      if (index !== this.indexOfPlaying) {
        el.pause();
        // eslint-disable-next-line no-param-reassign
        el.currentTime = 0;
      }
    });
  }
}
</script>

<style scoped lang="less">
.music-cards {
  &__wrapper {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    max-width: 90%;
    margin: 0 auto;
  }

  &__container {
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  &__item {
    height: fit-content;
    flex-basis: 20%;
    -ms-flex: auto;
    width: 250px;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
  }
}


@media (max-width: 1333px) {
  .music-cards__item {
    flex-basis: 33.33%;
  }
}
@media (max-width: 1073px) {
  .music-cards__item {
    flex-basis: 33.33%;
  }
}
@media (max-width: 815px) {
  .music-cards__item {
    flex-basis: 50%;
  }
}
@media(max-width: 620px) {
  .col {
    clear: both;
    float: none;
    margin-left: auto;
    margin-right: auto;
    width: auto !important;
  }
}
@media (max-width: 555px) {
  .music-cards__item {
    flex-basis: 100%;
  }
}
</style>
