<template>
<section class="home__catalog px-4 container-lg px-lg-0" id="catalog">
<h2 class="home__catalog-title">Каталог</h2>
  <div class="home__catalog-list row">
    <router-link
        v-for="(item, i) in catalog"
       :key="i"
        :to="{ path: `/catalog/${item.link}`}"
        href=""
        class="home__catalog-item col-6 col-sm-4 col-lg-3">
      <img :src="require('../../assets/img/home-catalog/' + item.img)" :alt="item.title">
      <span class="home__catalog-subtitle">{{ item.title }}</span>
    </router-link>
  </div>

</section>
</template>

<script>
export default {
  name: "AveSoapHomeСatalog",
  data() {
    return {
      catalog: this.$store.getters.getCatalog
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
.home__catalog-item{
  flex-direction: column;
  display: flex;
  align-items: center;
  row-gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 992px) {
    row-gap: 16px;
    margin-bottom: 24px;
  }
}
.home__catalog-subtitle{
  @media (min-width: 992px) {
    text-transform: uppercase;
  }
}

</style>