<template>
<section class="home__catalog px-4 container-lg px-lg-0" id="catalog">
<h2 class="home__catalog-title">Каталог</h2>
  <div class="home__catalog-list row">
    <AveSoapProductElm
        v-for="(item, i) in category"
        :key="i"
        :catalog="true"
        :set-data="item"/>
  </div>

</section>
</template>

<script>
import AveSoapProductElm from "../AveSoapProductElm.vue"
export default {
  name: "AveSoapHomeСatalog",
  components: {
    AveSoapProductElm
  },
  data() {
    return {
      category: this.$store.getters.getCategory
    }
  }
}
</script>

<style scoped lang="scss">
.home__catalog{
  margin-bottom: 60px;
  @media (min-width: 992px) {
    margin-bottom: 110px;
  }
}
.home__catalog-title{
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 992px) {
    margin-bottom: 32px;
  }
}
.home__catalog-list{
  row-gap: 16px;
  @media (min-width: 992px) {
    row-gap: 24px;
  }
}
</style>