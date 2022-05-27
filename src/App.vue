<template>
  <router-view/>
  <footer class="footer">
    <div class="copyright">简体 | 繁体 | English | 常见问题</div>
    <div class="copyright">LeastMall版权所有-桂ICP备xxxxxxx号 京公网安备xxxxxxxxxxxxx号 京ICP证xxxxxx号
    </div>
  </footer>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.footer{
  position:absolute;
  font-size: 10px;
  color:#000;
  bottom:0;
  width:100%;
  height:100px;
  line-height: 20px;
  text-align:center;
}
</style>
