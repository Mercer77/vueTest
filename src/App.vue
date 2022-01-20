<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  import './assets/js/autoChangeSize'
  import print from 'print-js'
  //
  // !function(e) {
  //   function t() {
  //     e.rem = d.getBoundingClientRect().width / 16, d.style.fontSize = e.rem + "px";
  //   }
  //   var n,
  //     i = e.navigator.appVersion.match(/iphone/gi) ? e.devicePixelRatio :1,
  //     a = 1 / i,
  //     d = document.documentElement,
  //     o = document.createElement("meta");
  //   if (e.dpr = i,
  //     e.addEventListener("resize", function() {
  //       clearTimeout(n), n = setTimeout(t, 300);
  //     }, !1),
  //     e.addEventListener("pageshow", function(e) {
  //       e.persisted && (clearTimeout(n), n = setTimeout(t, 300));
  //     }, !1),
  //     d.setAttribute("data-dpr", i), o.setAttribute("name", "viewport"),
  //     o.setAttribute("content", "initial-scale=" + a + ", maximum-scale=" + a + ", minimum-scale=" + a + ", user-scalable=no"), d.firstElementChild)
  //     d.firstElementChild.appendChild(o);
  //   else {
  //     var m = document.createElement("div");
  //     m.appendChild(o), document.write(m.innerHTML);
  //   }
  //   t();
  // }(window), document.addEventListener("DOMContentLoaded", function() {
  //   var e = document.createElement("input");
  //   e.type = "hidden",
  //     e.value = '{"platform": "qq_qzone_weixin_weibo_copy","title":"","desc": "","image":"","comment": "", "url":"","callback":"shareCallback()"}',
  //     e.id = "app_share_conf", document.getElementsByTagName("body")[0].appendChild(e);
  // }, !1);

  export default {
  name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./common/font/font.css";
  body{
    width: 100vw;
    height: 100vh;
    margin: 0;

  }
#app {
  /*font-family: 'let', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
