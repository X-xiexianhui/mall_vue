<template>
  <div>
    <mall-header/>
    <picture-card/>
  </div>
</template>

<script>
import MallHeader from "@/components/header/mallHeader";
import PictureCard from "@/components/product/pictureCard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components: {PictureCard, MallHeader}
}
</script>

<style scoped>

</style>
