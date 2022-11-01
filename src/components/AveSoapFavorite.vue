<template>
  <section class="favorite px-4 container-lg px-lg-0" id="catalog">
    <h2 class="favorite-title">Избранное</h2>
    <div class="favorite-list row">
      <AveSoapProductElm
          v-for="(item, i) in favoriteProduct"
          :key="i"
          :favorite="true"
          :set-data="item"/>
    </div>

  </section>
</template>

<script>
import AveSoapProductElm from "./AveSoapProductElm.vue"
import {mapGetters} from "vuex";

export default {
  name: "AveSoapFavorite",
  components: {
    AveSoapProductElm
  },
  computed: {
    ...mapGetters([
        'getProduct'
    ]),
    favoriteProduct() {
      return this.getProduct.filter(product => product.isFavorite)
    }
  }
}
</script>

<style scoped lang="scss">
.favorite {
  margin-bottom: 60px;
  @media (min-width: 992px) {
    margin-bottom: 110px;
  }
}

.favorite-title {
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 992px) {
    margin-bottom: 32px;
  }
}

.favorite-list {
  row-gap: 16px;
  @media (min-width: 992px) {
    row-gap: 24px;
  }
}
</style>