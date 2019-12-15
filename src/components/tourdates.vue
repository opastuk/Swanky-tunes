<template>
  <div class="dates__main">
    <a class="dates__link bit-widget-initializer"
       data-artist-name="swanky tunes"
       data-display-local-dates="true"
       data-display-past-dates="true"
       data-auto-style="true"
       data-text-color="#000000"
       data-link-color="#000000"
       data-background-color="rgba(0,0,0,0)"
       data-display-limit="7"
       data-link-text-color="#ffffff"
       data-display-lineup="false"
       data-display-play-my-city="false"
       data-display-logo="false"
       data-separator-color="rgba(255, 255, 255, 0.5)"
       data-language="en"
       data-display-start-time="true"/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class TourDates extends Vue {
    // eslint-disable-next-line class-methods-use-this
    mounted() {
      const bandsTownScript = document.createElement('script');
      bandsTownScript.setAttribute('src', 'https://widget.bandsintown.com/main.min.js');
      document.head.appendChild(bandsTownScript);
    }
  }
</script>

<style scoped lang="less">
  .dates__main {
    .flex-container();
    height: calc(100vh - 208px);
    overflow: scroll;
  }
  .dates__link {
    border: #000000;
  }
  @media (min-width: 768px) {
    .dates__main {
      margin-top: 20px;
    }
  }

</style>
