<template>
  <div class="music">
    <navMenu/>
    <div class="music__wrapper">

      <div v-for="song in songCard"
           :key="song.id">
        <music-track :song="song"/>
      </div>
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

  mounted() {
    axios.get('http://localhost:3000/music')
      .then((response) => {
        this.songCard = response.data;
        console.log(response);
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
  }
  .music__wrapper {
    .flex-container();
    overflow: scroll;
    height: calc(100vh - 208px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    .music__wrapper {
      box-sizing: border-box;
      padding: 0 10px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
