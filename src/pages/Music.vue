<template>
  <div class="music">
    <navMenu/>
    <div class="music__wrapper">
        <music-track class="music-track" v-for="(song, index) in songCard"
                     :song="song" @playing="preventOthers"
                     @ended="nextTrack" :key="index"/>

    </div>
      <footerMenu/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';
import musicTrack from '@/components/musicTrack.vue';

@Component({
  components: { navMenu, footerMenu, musicTrack },
})
export default class Music extends Vue {
  songCard = [];

  nowPlaying = {};

  songs = [];

  indexOfPlaying = null;

  mounted() {
    axios.get('http://localhost:3000/music')
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
  .music {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    &__wrapper {
      padding: 0 25px;
      overflow-y: scroll;
      overflow-x: hidden;
      flex-basis: 405px;
      flex-grow: 2;
    }
  }
  @media (min-width: 667px) {
    .music__wrapper {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
    }
    .music-track {
      &:nth-child(odd) {
        margin-right: 25px;
      }
    }
  }

  @media (min-width: 1160px) {
    .music__wrapper{
      justify-content: space-between;
    }
    .music-track {
      &:nth-child(odd){
        margin-right: 0;
      }
    }
  }

  .music-track {
    margin-bottom: 30px;
  }
</style>
