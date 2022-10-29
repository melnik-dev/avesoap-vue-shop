<template>
  <section class="home__stock section px-4 container-lg px-lg-0">
    <h2 class="home__stock-title" id="stock">Акции</h2>
    <div class="home__stock-box">
      <img src="../../assets/img/home-stock/stock1.jpg" alt="stock">
      <img src="../../assets/img/home-stock/stock1.jpg" alt="stock">
      <img src="../../assets/img/home-stock/stock1.jpg" alt="stock">
      <img src="../../assets/img/home-stock/stock1.jpg" alt="stock">
    </div>
  </section>
</template>

<script>
export default {
  name: "AveSoapHomeStock"
}
</script>

<style scoped lang="scss">
.home__stock-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  & img:nth-child(2n) {
    margin-top: 16px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: -65px;
    column-gap: 24px;

    & img:nth-child(2n) {
      margin-top: 0;
    }
    & img:nth-child(2n - 1) {
      margin-top: 55px;
    }
  }
}
.home__stock-title {
  @media (min-width: 768px) {
    text-align: left;
  }
}
</style>