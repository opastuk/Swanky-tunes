<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="less">
@import "./assets/mixins.less";
@import "~normalize.css";

@font-face{
  font-family: "Gotham Pro";
  src: url(./assets/fonts/Gotham_Pro.ttf) format("ttf");
}

body, html{
  overflow: hidden;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Gotham Pro', sans-serif;
  color: #000000;
  font-size: 18px;
  line-height: 26px;
  min-width: 320px;
  height: 100%;
}

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

</style>
