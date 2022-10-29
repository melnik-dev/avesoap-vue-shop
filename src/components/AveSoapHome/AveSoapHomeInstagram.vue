<template>
  <section class="home__inst section px-4 container-lg px-lg-0">
    <img class="home__inst-img-zero" src="../../assets/img/home-inst/inst0.jpg" alt="instagram">
    <h2 class="home__inst-title">Мы в<br> Instagram</h2>
    <img class="home__inst-img-one" src="../../assets/img/home-inst/inst1.jpg" alt="instagram">
    <img class="home__inst-img-two" src="../../assets/img/home-inst/inst2.jpg" alt="instagram">
    <div class="home__inst-three-box">
      <img class="home__inst-img-three" src="../../assets/img/home-inst/inst3.jpg" alt="instagram">
      <img class="home__inst-img-deg90-three" src="../../assets/img/home-inst/inst3-deg90.jpg" alt="instagram">
    </div>
  </section>
</template>

<script>
export default {
  name: "AveSoapHomeInstagram"
}
</script>

<style scoped lang="scss">
.home__inst {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: 32% 25% 25% 1fr;
  }
}

.home__inst-img-zero {
  display: none;
  @media (min-width: 768px) {
    display: block;
    grid-column-start: 1;
    grid-column-end: 2;
  }
}

.home__inst-title {
  text-align: left;
  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
}

.home__inst-img-one {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    align-self: end;
    margin-top: 150px;
  }
  @media (min-width: 1200px) {
    margin-top: 190px;
  }
}

.home__inst-img-two {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-top: 80px;
  @media (min-width: 768px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    margin-top: 150px;
  }
  @media (min-width: 1200px) {
    margin-top: 190px;
  }
}
.home__inst-three-box{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  @media (min-width: 768px) {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
.home__inst-img-three{
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
.home__inst-img-deg90-three {
  margin: 0 auto;
  @media (min-width: 768px) {
    display: none;
  }
}
</style>