<template>
  <section class="home__heade">
    <h1 class="heade__title">
      <span class="heade__soap">Мыло</span><br>
      <span class="heade__hands">ручной</span><br>
      <span class="heade__care">заботы</span>
      <img class="heade__wave" src="../assets/img/home-head/wave.png" alt="wave">
    </h1>
  </section>
</template>

<script>
export default {
  name: "AveSoapHome"
}
</script>

<style scoped lang="scss">
.home__heade {
  min-height: 488px;
  background-image: url("../assets/img/home-head/soap-1.jpg"),
  url("../assets/img/home-head/soap-2.jpg"),
  url("../assets/img/home-head/soap-3.jpg");
  background-position: 0 331px, 100% 0, 100% 260px;
  background-size: 87px 87px, 87px 87px, 193px 254px;
  background-repeat: no-repeat;
  position: relative;

  @media (min-width: 450px) {
    min-height: 400px;
    background-position: 0 290px, 100% 0, 100% 100%;
  }
  @media (min-width: 550px) {
    background-position: -20px 200px, 50% 0, 100% 100%;
    background-size: 87px 87px, 95px 95px, 220px 290px;
  }
  @media (min-width: 768px) {
    min-height: 500px;
    background-position: -20px 200px, 49% 0, 100% 100%;
    background-size: 87px 87px, 95px 95px, 341px 450px;
  }
  @media (min-width: 992px) {
    min-height: 500px;
    background-position: -20px 200px, 49% 0, 100% 100%;
    background-size: 120px 120px, 150px 150px, 417px 550px;
  }
  @media (min-width: 1200px) {
    min-height: 650px;
    background-position: -20px 200px, 50% 0, 100% 100%;
    background-size: 144px 144px, 200px 200px, 493px 650px;
  }
}

.heade__title {
  position: absolute;
  top: 80px;
  left: 15%;
}

.heade__soap {
}

.heade__hands {
  @media (min-width: 992px) {
    margin-left: 55px;
  }
  @media (min-width: 1200px) {
    margin-left: 110px;
  }
}

.heade__care {
}

.heade__wave {
  position: absolute;
  bottom: -28px;
  left: 8px;
  width: 56px;
  height: 30px;
  @media (min-width: 992px) {
    bottom: 110px;
    left: -130px;
    width: 173px;
    height: 95px;
  }
  @media (min-width: 1200px) {
    bottom: 190px;
    left: -80px;
  }
}
</style>