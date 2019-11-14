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
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="#">Radio show</a>
            <ul class="sub-navigation__list" hidden>
              <li class="sub-navigation__item">
                <a class="sub-navigation__link" href="#">
                  <span class="visually-hidden">Mixcloud</span>
                </a>
              </li>
              <li class="sub-navigation__item">
                <a class="sub-navigation__link" href="#">
                  <span class="visually-hidden">Apple podcasts</span>
                </a>
              </li>
            </ul>
        </li>
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="#">Demo drop</a>
        </li>
        <li class="main-navigation__item">
          <a class="main-navigation__link" href="../pages/Contacts.vue">Contacts</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavMenu extends Vue {
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
  .main-navigation {
    margin-bottom: 155px; /*временно*/
  }
  .main-navigation__list {
    display: flex;
    justify-content: space-around;
  }
  .main-navigation__item {
    padding: 40px 0;
  }
  .main-navigation__link {
    position: relative;
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
}
</style>
