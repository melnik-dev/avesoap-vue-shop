<template>
  <section class="home__delivery section px-4 container-lg px-lg-0" id="catalog">
    <h2 class="home__delivery-title">Доставка и оплата</h2>
    <div class="home__delivery-box">
      <div class="home__delivery-rocket">
        <img class="delivery-mob-img" src="../../assets/img/home-delivery/delivery1.jpg" alt="delivery">
        <img class="delivery-desc-img" src="../../assets/img/home-delivery/delivery-desc1.jpg" alt="delivery">

        <div class="home__delivery-rocket-box">

          <img src="../../assets/img/home-delivery/roket.svg" alt="delivery">

          <div class="home__delivery-rocket-text">
            <p>Мы отправляем заказы по всему миру в кратчайшие сроки!</p>
            <p>При оформлении заказа вы можете выбрать доставку Почтой России, доставку удобный в пункт выдачи заказа
              или прямо домой.</p>
            <p>Доставка заказов от 2 500р. в удобный пункт выдачи осуществляется бесплатно.</p>
          </div>
        </div>
      </div>
      <div class="home__delivery-cart">
        <div class="home__delivery-cart-box">
          <img src="../../assets/img/home-delivery/cart.svg" alt="delivery">

          <div class="home__delivery-cart-text">
            <p>Оплата осуществляется онлайн при оформлении заказа с помощью банковских карт различных платежных систем,
              или сервиса Сбербанк Онлайн.</p>
          </div>
        </div>
        <img class="delivery-mob-cart-img" src="../../assets/img/home-delivery/delivery2.jpg" alt="delivery">
        <img class="delivery-desc-cart-img" src="../../assets/img/home-delivery/delivery-desc2.jpg" alt="delivery">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AveSoapHomeDelivery"
}
</script>

<style scoped lang="scss">
.home__delivery {
}

.home__delivery-title {
}

.home__delivery-box {
  display: grid;
  gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.home__delivery-rocket {
  display: grid;
  grid-template-columns: 15% 1fr;
  gap: 16px;
  align-items: center;
  @media (min-width: 992px) {
  grid-template-columns: 1fr 1fr;
  align-items: start;
}
}

.home__delivery-cart {
  display: grid;
  grid-template-columns: 1fr 15%;
  gap: 16px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: auto;
    align-items: start;
  }
  & img {
    justify-self: end;
  }
}

.home__delivery-rocket-box,
.home__delivery-cart-box {
  background: white;
  border: 1px solid var(--mainGrey);
  padding: 24px;
  padding-top: 28px;
  text-align: center;

  & img {
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
.home__delivery-cart-box {
  @media (min-width: 992px) {
    width: 50%;
  }
}

.delivery-mob-img {
  @media (min-width: 992px) {
    display: none;
  }
}

.delivery-desc-img {
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
}

.delivery-mob-cart-img {
  @media (min-width: 768px) {
    display: none;
  }
}

.delivery-desc-cart-img {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}

</style>