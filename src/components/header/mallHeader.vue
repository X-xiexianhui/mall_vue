<template>
  <div :class="$style.box">
    <div :class="$style.logo"><img src='@/assets/frontend/img/logo_top.png' :class="$style.logo" alt="LeastMall商城"></div>
    <div>
      <el-input
          v-model="keyWord"
          placeholder="Please input"
          class="input-with-select"
      >
        <template #append>
          <el-button icon="Search" @click="goToQuery(keyWord)"/>
        </template>
      </el-input>
    </div>
    <div :class="$style.btn">
      <div style="float: left;padding: 10px">
        <el-icon :size="30"><Avatar/></el-icon>
      </div>
     <div style="float: right;padding: 10px">
       <el-icon :size="30"><ShoppingCart/></el-icon>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mallHeader",
  data(){
    return {
      keyWord:''
    }
  },
  methods:{
    goToQuery(keyWord){
      this.$router.push({path:'/query',query:{keyWord:keyWord}})
    }
  }

}
</script>

<style module lang="less">
.box {
  top: 0;
  position: fixed;
  margin: 0 0;
  padding: 0 0;
  height: auto;
  width: 100%;
  background: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 1px rgba(0,0,0,.3);
  z-index: 3;
}
.logo {
  vertical-align: top;
  height: 40px;
}
.headerMenuBox {
  display: flex;
  background: #fff;
  align-items: flex-start;

  /*justify-content: center*/
  h1 {
    text-shadow: 0 0 40px #409EFF;
    font-size: 26px;
    text-transform: uppercase;
    z-index: 10;
  }
}
.menu {
  margin-left: auto;
  background: #ffffff;
}
.btn{
  margin-right: 30px;
}
</style>

