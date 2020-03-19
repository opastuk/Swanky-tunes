<template>
  <div class="music">
    <navMenu/>
    <div class="music__wrapper">
        <music-track v-for="song in songCard" :song="song" :key="song.id"/>
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
    display: flex;
    overflow: scroll;
    height: calc(100vh - 100px);
    flex-direction: column;
    align-items: center;

    &::-webkit-scrollbar{
      opacity: 0;
    }
    &::-webkit-scrollbar-corner {
      opacity: 0;
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
      height: calc(100vh - 208px);
      padding: 0 10px;
      justify-content: space-between;
    }
  }
</style>
