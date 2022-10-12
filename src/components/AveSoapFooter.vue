<template>
  <footer class="container-lg footer">
    <div class="footer__wrapper">

      <div class="footer__lik-cont-wrapp">
        <div class="footer__contact">
          <router-link to="/home">
            <AveSoapBaseIcon
                class="icon-lg"
                name="logo"
                width="25"
                height="40"
                viewBox="0 0 39 61"/>
          </router-link>
          <div class="footer__contact-box">
            <a href="tel:+79181234567">+7(918)1234567</a>
            <a @click="goInst">
              <AveSoapBaseIcon
                  class="icon-lg-inst"
                  name="instagram"
                  viewBox="0 0 15 15"
                  width="15" height="15"/>
            </a>
          </div>
        </div>

        <div class="footer__link-wrap">
          <router-link to="/home#catalog">КАТАЛОГ</router-link>
          <router-link to="/home#about">О НАС</router-link>
          <router-link to="/home#delivery">ДОСТАВКА И ОПЛАТА</router-link>
          <router-link to="/home#instagram">МЫ В INSTAGRAM</router-link>
          <router-link to="/home#stock">АКЦИИ</router-link>
        </div>
      </div>


      <div class="footer__sublink-wrap">
        <div class="footer__sublink-one-col">
          <router-link to="/home/">Мыло</router-link>
          <router-link to="/home/">Уход за кожей</router-link>
          <router-link to="/home/">Уход за волосами</router-link>
          <router-link to="/home/">Соль и бисер для ванн</router-link>
        </div>
        <div class="footer__sublink-two-col">
          <router-link to="/home/">Бомбочки</router-link>
          <router-link to="/home/">Флорентийское саше</router-link>
          <router-link to="/home/">Свечи</router-link>
          <router-link to="/home/">Разное</router-link>
        </div>
      </div>

      <div class="footer__pay-desc">
        <img src="../assets/img/pay-desc.png" alt="pay">
      </div>
    </div>
    <div class="footer__pay-mob">
      <img src="../assets/img/pay-mob.png" alt="pay">
    </div>

    <div class="footer__copyright">
      <span>ИП Асовская Анна Валерьевна</span>
      <span>ИНН 231121559311 • ОГРНИП  319237500363990.</span>
      <span class="footer__copyright_site">&#169; avesoap.ru, 2022.</span>
    </div>
    <div class="footer__creator">
    <a href="https://github.com/melnik-dev" title="t.me/melnik_dev">dev Aleksander Melnik</a>
    </div>
  </footer>
</template>

<script>
import AveSoapBaseIcon from "./AveSoapBaseIcon.vue"

export default {
  name: "AveSoapFooter",
  components: {
    AveSoapBaseIcon
  },
  methods: {
    goInst() {
      window.location.href = 'https://www.google.com';
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  font-size: 11px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 20px;

  @media (min-width: 992px) {
    font-size: 14px;
  }
}

.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer__lik-cont-wrapp {
  @media (min-width: 460px) {
    display: contents;
  }

}

.footer__contact {
  display: flex;
  gap: 8px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}

.footer__contact-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;
}

.footer__link-wrap {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  row-gap: 16px;
  margin-bottom: 16px;
}

.footer__sublink-wrap {
  @media (min-width: 590px) {
    display: contents;
  }
}

.footer__sublink-one-col,
.footer__sublink-two-col {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 16px;
}

.footer__pay-desc {
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
}
.footer__pay-mob{
  margin-bottom: 60px;
  @media (min-width: 992px) {
    display: none;
  }
}
.footer__copyright{
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    gap: 4px;

    &_site{
      order: -1;
    }
  }
}
.footer__creator{
  text-align: center;
}
//icon
@media (min-width: 920px) {
  .icon-lg {
    width: 39px;
    height: 69px;
  }
}

.icon-lg-inst {
  width: 15px;
  height: 15px;
}
</style>