<template>
  <div>
    <ul class="footer-navigation__list">
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://vk.com/swankytunes" target="_blank" rel="noopener">
          <span class="visually-hidden">Vk</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Vk">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://www.instagram.com/swankytunes" target="_blank" rel="noopener">
          <span class="visually-hidden">Instagram</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Instagram">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://www.facebook.com/swankytunes" target="_blank" rel="noopener">
          <span class="visually-hidden">Facebook</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Facebook">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://www.youtube.com/swankytuneslive" target="_blank" rel="noopener">
          <span class="visually-hidden">Youtube</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Youtube">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://twitter.com/swankytunes" target="_blank" rel="noopener">
          <span class="visually-hidden">Twitter</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Twitter">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://soundcloud.com/swankytunes" target="_blank" rel="noopener">
          <span class="visually-hidden">Soundcloud</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Soundcloud">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://itunes.apple.com/us/artist/swanky-tunes/19588.." target="_blank" rel="noopener">
          <span class="visually-hidden">Apple music</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Apple music">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://open.spotify.com/artist/06cLuOP0p7VAnBnqil1eW.." target="_blank" rel="noopener">
          <span class="visually-hidden">Spotify</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Spotify">
        </a>
      </li>
      <li class="footer-navigation__item">
        <a class="footer-navigation__link" href="https://www.beatport.com/artist/swanky-tunes/24923" target="_blank" rel="noopener">
          <span class="visually-hidden">Beatport</span>
          <img class="footer-navigation__icon" src="../assets/img/twitter-b.png" alt="Beatport">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class footerMenu extends Vue {
}
</script>

<style scoped lang="less">
  .footer-navigation__list {
    .reset-list();
    width: 95px; /*do percents*/
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .footer-navigation__item {
    width: 40px;
    height: 40px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  .footer-navigation__item:nth-child(odd) {
    padding-left: 0;
  }
  @media (min-width: 768px) {
    .footer-navigation__list {
      width: 600px;
      padding-bottom: 35px;
      justify-content: space-between;
    }
    .footer-navigation__item{
      padding: 0;
    }
    .footer-navigation__icon:hover {
      transform: scale(1.2);
      transition: 1s;
    }
  }
</style>
