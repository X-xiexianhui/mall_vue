<template>
  <div>
    <mall-header/>
    <div style="margin-top:70px">
      <el-carousel v-if="banner.length>0" trigger="click" height="300px" style="width: 70%;margin: auto">
        <el-carousel-item v-for="item in banner" :key="item.id">
          <el-image style="width: 100%; height: 100%" :src="'data:image/png;base64,'+item.image" fit="contain"/>
        </el-carousel-item>
      </el-carousel>
      <div id="pro_form" style="position: relative;width: 100%;height: 1000px;">
        <div style="position: relative;top: 100px;left:130px;">
          <el-row>
            <el-col :span="4" v-for="(product,index) in productList" :key="index" :offset="1" style="margin-bottom:40px">
              <el-card :body-style="{ padding: '0px', height:'360px'}" shadow="hover" style="width: 260px;height: 320px;">
                <div style="padding: 6px;height: 310px;">
                  <div style="position: relative;top: 30px;">
                    <el-image style="width: 100%; height: 100%" :src="'data:image/png;base64,'+product['cover']" fit="contain"/>
                    <div style="position: relative;top: 10px;left: 66px;"><i class="el-icon-time"></i>{{product["product_name"]}}</div>
                  </div>
                  <div>
                    <div><span style="font-size: large; ">{{product["descriptions"]}}</span></div>
                    <div style="position: relative;top: 15px;text-align: center;color: red">￥{{product["price"]}}</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
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
      banner: [],
      productList: []
    }
  },
  created() {
    this.getBanner()
    this.getProducts()
  },
  methods: {
    getBanner(){
      ajax.get("/api/banner/get",{}).then( res => {
        this.banner=res
      }).catch(err => {
        console.log(err)
      })
    },
    getProducts(){
      ajax.get("/api/product/get",{}).then(res => {
        this.productList = res
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
