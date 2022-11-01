<template>
<section class="home__catalog px-4 container-lg px-lg-0" id="catalog">
<h2 class="home__catalog-title home-title">Каталог</h2>
  <div class="home__catalog-list row">
    <AveSoapProductElm
        v-for="(item, i) in getCategory"
        :key="i"
        :catalog="true"
        :set-data="item"/>
  </div>

</section>
</template>

<script>
import AveSoapProductElm from "../AveSoapProductElm.vue"
import {mapGetters} from "vuex";
// import gsap from "gsap";

export default {
  name: "AveSoapHomeСatalog",
  components: {
    AveSoapProductElm
  },
  computed: {
    ...mapGetters([
        'getCategory'
    ])
  }
  // mounted() {
  //   const tl = gsap.timeline({repeatDelay: 0.1, });
  //   tl.from(".home__catalog-list",{ y: "100%", opacity: 0, duration: 0.4});
  //   tl.from(".home__catalog-item-2",{ y: "100%", opacity: 0, duration: 0.4});
  //   tl.from(".home__catalog-item-3",{ y: "100%", opacity: 0, duration: 0.4});
  //   tl.from(".home__catalog-item-4",{ y: "100%", opacity: 0, duration: 0.4});
  //   tl.from(".home__catalog-item-5",{ y: "100%", opacity: 0, duration: 0.4});
  //   tl.from(".home__catalog-item-6",{ y: "100%", opacity: 0, duration: 0.4});
  //   tl.from(".home__catalog-item-7",{ y: "100%", opacity: 0, duration: 0.4});
  //   tl.from(".home__catalog-item-8",{ y: "100%", opacity: 0, duration: 0.4});
  // }
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
  .product__wrapper:first-child{
    display: none;
  }
}
</style>