<template>
  <section class="home__about section px-4 container-lg px-lg-0" id="catalog">
    <h2 class="home__about-title">О нас</h2>
    <div class="home__about-box">
      <div class="home__about-dosoap">
        <p>Почему я делаю мыло?</p>
        <p>Точней даже так - почему практически все свободное время я делаю мыло, экспериментирую с рецептами, читаю про
          масла, смотрю и слушаю видеоуроки и мастерклассы?
        </p>
        <p>Разве же это не очевидно?</p>
        <p>Я люблю мыло! Я хочу сделать этот мир чище и красивей, а людей счастливей! Я безумно радуюсь когда вы пишете,
          что вам понравился подарок, что мыло подошло вашей коже, что ваша подруга в восторге от аромата.
        </p>
        <p>Еще я стараюсь свести к минимуму или исключить продукты и упаковку, которые наносят вред окружающей среде и
          человеку.
        </p>
        <p>Продукция имеет соответсвующие сертификаты.</p>
      </div>

      <div class="home__about-docs">
        <div class="home__about-docs--item-one">
          <img src="../../assets/img/home-about/about-1.jpg" alt="мыло">
        </div>
        <div class="home__about-docs--item-two">
          <img src="../../assets/img/home-about/about-2.jpg" alt="мыло">
        </div>
        <div class="home__about-docs--item-three">
          <img src="../../assets/img/home-about/about-3.jpg" alt="мыло">
        </div>
        <div class="home__about-docs-box-wrapper">
          <div class="home__about-docs-box">
            <img class="home__about-docs-arrow" src="../../assets/img/home-about/docs-arrow.svg" alt="Документы">
            <span class="home__about-docs-title">Документы</span>
          </div>
          <div class="home__about-docs--item-four">
            <img src="../../assets/img/home-about/about-4.jpg" alt="мыло">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AveSoapHomeAbout"
}
</script>

<style scoped lang="scss">

.home__about-box {
  display: grid;
  gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.home__about-dosoap {
  background: white;
  padding: 34px;
  border: 1px solid var(--mainGrey);
}

.home__about-docs {
  display: grid;
  grid-template-columns: 1fr 36% 22%;
  column-gap: 16px;
  @media (min-width: 768px) {
    gap: 16px;
    order: -1;
  }
}

.home__about-docs-box-wrapper {
  grid-column-start: 1;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (min-width: 992px) {
    display: contents;
  }
}

.home__about-docs-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 12px;
  background: var(--mainGrey);
  color: white;
  text-transform: uppercase;
  @media (min-width: 992px) {
    padding: 34px 14px;
  }
}

.home__about-docs--item-two {
  place-self: center;
  @media (min-width: 992px) {
    align-self: end;
  }
}

.home__about-docs--item-three {
  place-self: end;
  @media (min-width: 992px) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 4;
  }
  & img {
    margin-left: auto;
    margin-top: 5px;
  }
}

.home__about-docs--item-four {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  @media (min-width: 992px) {
    padding-top: 0;
    align-items: flex-start;
  }
}
</style>