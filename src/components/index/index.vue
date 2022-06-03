<template>
  <div>
    <mall-header/>
    <div>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in banner" :key="item">
          <el-image style="width: 100%; height: 100%" :src="'data:image/png;base64,'+item" fit="fit" />
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
  setup() {
    this.getBanner()
  },
  methods: {
    getBanner(){
      ajax.get("/api/banner/get").then( res => {
        this.banner=res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
