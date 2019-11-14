<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import "~normalize.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #000000;
  font-size: 18px;
  line-height: 26px;

  min-width: 320px;
}

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}


</style>
