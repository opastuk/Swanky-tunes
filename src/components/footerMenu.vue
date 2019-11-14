<template>
<div>
  <ul class="footer-navigation__list">
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://vk.com/swankytunes" target="_blank" rel="noopener">
        <span class="visually-hidden">Vk</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://www.instagram.com/swankytunes" target="_blank" rel="noopener">
        <span class="visually-hidden">Instagram</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://www.facebook.com/swankytunes" target="_blank" rel="noopener">
        <span class="visually-hidden">Facebook</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://www.youtube.com/swankytuneslive" target="_blank" rel="noopener">
        <span class="visually-hidden">Youtube</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://twitter.com/swankytunes" target="_blank" rel="noopener">
        <span class="visually-hidden">Twitter</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://soundcloud.com/swankytunes" target="_blank" rel="noopener">
        <span class="visually-hidden">Soundcloud</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://itunes.apple.com/us/artist/swanky-tunes/19588.." target="_blank" rel="noopener">
        <span class="visually-hidden">Apple music</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://open.spotify.com/artist/06cLuOP0p7VAnBnqil1eW.." target="_blank" rel="noopener">
        <span class="visually-hidden">Spotify</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
    <li class="footer-navigation__item">
      <a class="footer-navigation__link" href="https://www.beatport.com/artist/swanky-tunes/24923" target="_blank" rel="noopener">
        <span class="visually-hidden">Beatport</span>
        <img class="footer-navigation__icon" src="../assets/img/vk.png" alt="">
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class mainLogo extends Vue {
}
</script>

<style scoped lang="less">
  @media (min-width: 768px) {
    .footer-navigation__list {
      .reset-list();
      width: 600px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .footer-navigation__item {
      background-color: #000;
      width: 39px;
      height: 39px;
      border-radius: 40%;
    }
    .footer-navigation__item:hover,
    .footer-navigation__item:focus {
      transform: scale(1.2);
      transition: 1s;
    }
  }
</style>
