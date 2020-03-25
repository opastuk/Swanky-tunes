<template>
  <div class="music">
    <navMenu/>
    <div class="music__wrapper">
        <music-track v-for="(song, index) in songCard"
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
    .fullscreen();
    .flex-layout();
    flex-wrap: nowrap;
    .main-background();
    flex-direction: column;
    min-height: 100vh;
    &__wrapper {
      .flex-container();
      overflow: scroll;
      height: calc(100vh - 208px);
      display: flex;
      flex-direction: column;
      align-items: center;

      &::-webkit-scrollbar{
        opacity: 0;
      }
      &::-webkit-scrollbar-corner {
        opacity: 0;
      }

    }
  }
  @media (min-width: 667px) {
    .music__wrapper {
      box-sizing: border-box;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  @media (min-width:870px) {
    .music__wrapper {
      justify-content: space-between;
    }
  }
  @media (min-width: 1160px) {
    .music__wrapper {
      padding: 0 10px;
      justify-content: space-between;
    }
  }
</style>
