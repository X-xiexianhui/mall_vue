<template>
<div>
  <div style="margin-top:70px">
    <div id="pro_form" style="position: relative;width: 100%;height: 100%;">
      <div style="position: relative;top: 100px;left:130px;">
        <el-row>
          <el-col :span="4" v-for="(product,index) in productList" :key="index" :offset="1" style="margin-bottom:40px">
            <el-card :body-style="{ padding: '0px', height:'360px'}" shadow="always" style="width: 260px;height: 320px;">
              <div style="padding: 6px;height: 310px;">
                <div style="position: relative;top:30px">
                  <el-image style="width: 70%; height: 70%" :src="'data:image/png;base64,'+product['cover']" fit="contain"/>
                </div>
                <div style="margin-top: 10px">
                  <div style="position: relative;top: 15px;padding: 3px">{{product["product_name"]}}</div>
                  <div style="position: relative;top: 15px;padding: 3px"><span style="font-size: small">{{product["descriptions"]}}</span></div>
                  <div style="position: relative;top: 15px;text-align: center;color: red;padding: 3px">￥{{product["price"]}}元</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="copyright">简体 | 繁体 | English | 常见问题</div>
    <div class="copyright">LeastMall版权所有-桂ICP备xxxxxxx号 京公网安备xxxxxxxxxxxxx号 京ICP证xxxxxx号
    </div>
  </footer>
</div>
</template>

<script>
import {ajax} from "@/server/http";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "query",
  data() {
    return {
      keyWord:'',
      productList: []
    }
  },
  created() {
    this.keyWord = this.$route.query.keyWord
    this.getProducts(this.keyWord)
  },
  methods:{
    getProducts(keyWord){
      if (keyWord === '') return this.$alert('请输入搜索关键字')
      ajax.get("/api/product/query",{keyWord:keyWord}).then(res => {
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
