<template>
  <div>
    <nav class="main-navigation">
      <ul class="main-navigation__list">
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="#">Music</a>
        </li>
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="https://www.youtube.com/playlist?list=PL9W0uKtpnSDAb9NvRcxbosp5DzKWT2wGo" target="_blank" rel="noopener">Videos</a>
        </li>
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="#">Tour dates</a>
        </li>
        <li class="main-navigation__item main-navigation__item--dropdown">
          <a class="main-navigation__link" href="#">Radio show</a>
            <ul class="sub-navigation__list">
              <li class="sub-navigation__item">
                <a class="sub-navigation__link" href="https://podcasts.apple.com/ru/podcast/swanky-tunes-showland-podcast/id923114101" target="_blank" rel="noopener">
                  <span class="visually-hidden">Mixcloud</span>
                </a>
              </li>
              <li class="sub-navigation__item">
                <a class="sub-navigation__link" href="https://www.mixcloud.com/swankytunes/" target="_blank" rel="noopener">
                  <span class="visually-hidden">Apple podcasts</span>
                </a>
              </li>
            </ul>
        </li>
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="#">Demo drop</a>
        </li>
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavMenuHome extends Vue {
}
</script>

<style scoped lang="less">
  .main-navigation__list {
    .reset-list();
    display: flex;
    justify-content: space-around;
  }
  .main-navigation__link {
    .reset-link();
    color: #ffffff;
  }
@media (min-width: 768px) {
  .main-navigation__list {
    display: flex;
    justify-content: space-around;
  }
  .main-navigation__item {
    padding-top: 40px;
  }
  .main-navigation__link {
    position: relative;
  }
  .main-navigation__link:hover,
  .main-navigation__link:focus {
    outline: none;
  }
  .main-navigation__link::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: width .3s ease-in-out;
  }
  .main-navigation__link:hover::after,
  .main-navigation__link:focus::after {
     width: 100%;
   }
  .main-navigation__item--dropdown {
    position: relative;
  }
  .sub-navigation__list {
    .reset-list();
    box-sizing: border-box;
    border: 1px solid #ffffff;
    padding: 15px;
    width: 90px;
    min-height: 125px;
    position: absolute;
    display: none;
  }
  .main-navigation__item--dropdown:hover .sub-navigation__list {
    .flex-layout();
    align-items: center;
  }
  .main-navigation__item--dropdown:focus .sub-navigation__list {
    .flex-layout();
    align-items: center;
  }
  .sub-navigation__link {
    display: block;
    width: 40px;
    height: 40px;
    /*temporary*/
    background-image: url("../assets/img/twitter.png");
  }
  .sub-navigation__link:hover,
  .sub-navigation__link:focus {
    outline: none;
    transform: scale(1.2);
    transition: 1s;
  }
}
</style>
