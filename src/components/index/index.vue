<template>
  <div>
    <mall-header/>
    <div style="margin-top:70px">
      <el-carousel v-if="banner.length>0" trigger="click" height="300px" style="width: 70%">
        <el-carousel-item v-for="item in banner" :key="item.id">
          <el-image style="width: 100%; height: 100%" :src="'data:image/png;base64,'+item.image" fit="contain"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import MallHeader from "@/components/header/mallHeader";
import {ajax} from "@/server/http";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components: {MallHeader},
  data() {
    return {
      banner: []
    }
  },
  created() {
    this.getBanner()
  },
  methods: {
    getBanner(){
      ajax.get("/api/banner/get",{}).then( res => {
        this.banner=res
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
