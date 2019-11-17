<template>
  <div class="music">
    <navMenu></navMenu>
    <div class="music__wrapper">
      <div class="track" v-for="song in songCard" :key="song.id">
        <div class="track-cover__wrapper">
          <img class="track__cover" :src=song.poster alt="Track cover">
        </div>
        <div class="track__info">
          <p class="track__name">Game Time</p>
          <span class="track__producer">Swanky Tunes, NSSND, Lexblaze</span>
          <span class="track__year">2019</span>
        </div>
      </div>
    </div>
    <div class="footer-menu__wrapper">
      <footerMenu></footerMenu>
    </div>
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
  songCard = null;

  mounted() {
    axios.get('http://localhost:3000/music')
      .then(response => (this.songCard = response));
  }
}
</script>
<style scoped lang="less">
  .music {
    .fullscreen();
    .flex-layout();
    .main-background();
  }
  @media (min-width: 768px) {
    .music__wrapper {
      .flex-container();
    }
    .footer-menu__wrapper {
      .flex-container();
    }
  }

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
