<template>
  <header>
    <nav class="navbar px-4 px-md-2 container-lg px-lg-0">
      <div class="navbar-mobile__wrapper" ref="openMenu">
        <div class="navbar-mobile__menu-box">
          <button class="navbar-mobile__menu-btn" @click="showMenu">
            <AveSoapBaseIcon
                class="navbar-mobile__icon-burger" name="burger"/>
            <AveSoapBaseIcon
                class="navbar-mobile__icon-close" name="close"/>
          </button>
          <button>
            <AveSoapBaseIcon name="search"/>
          </button>
        </div>

        <a href="#">
          <AveSoapBaseIcon
              class="navbar-mobile__logo"
              name="logo"
              width="25"
              height="40"
              viewBox="0 0 39 61"/>
        </a>

        <a href="" class="navbar-mobile__cart">
          <AveSoapBaseIcon name="cart"/>
        </a>
        <div class="navbar-mobile__menu">
          <ul class="navbar-mobile__menu-list">
            <li class="navbar-mobile__menu-link">
              <a href=""><AveSoapBaseIcon name="home"/> Домой</a>
            </li>
            <li class="navbar-mobile__menu-link">
              <a href="">Каталог</a>
            </li>
            <li class="navbar-mobile__menu-link">
              <a href="">Доставка и оплата</a>
            </li>
            <li class="navbar-mobile__menu-link">
              <a href="">Акции</a>
            </li>
            <li class="navbar-mobile__menu-link">
              <a href=""><AveSoapBaseIcon name="favoriteFill"/> Избранное</a>
            </li>
            <li class="navbar-mobile__menu-link">
              <a href=""><AveSoapBaseIcon name="user"/> Войти</a>
            </li>
            <li class="navbar-mobile__menu-link">
              <a href=""><AveSoapBaseIcon name="phone"/> +7(918)1234567</a>
            </li>
            <li class="navbar-mobile__menu-link">
              <a href=""><AveSoapBaseIcon name="instagram" viewBox="0 0 15 15" width="15" height="15"/> instagram</a>
            </li>
          </ul>
        </div>
        <div class="navbar-mobile__menu-blind"></div>
      </div>
      <div class="navbar__wrapper">
        <div class="navbar__item">
          <a class="navbar__logo" href="#">
            <AveSoapBaseIcon
                class="icon-lg"
                name="logo"
                width="39"
                height="61"
                viewBox="0 0 39 61"/>
          </a>
          <a class="navbar__inst" href="">
            <AveSoapBaseIcon
                class="icon-lg-inst"
                name="instagram"
                viewBox="0 0 15 15"
                width="15" height="15"/>
          </a>
          <a class="navbar__phone" href="tel:+79181234567">+7(918)1234567</a>
        </div>

        <div class="navbar__item navbar__item-line">
          <a class="navbar__item-link" href="">
            <AveSoapBaseIcon name="home"/>
          </a>
          <a class="navbar__item-link" href="">КАТАЛОГ</a>
          <a class="navbar__item-link" href="">ДОСТАВКА И ОПЛАТА</a>
          <a class="navbar__item-link" href="">АКЦИИ</a>
        </div>

        <div class="navbar__item">
          <button class="navbar__item-link">
            <AveSoapBaseIcon name="search"/>
          </button>
          <a class="navbar__item-link" href="">
            <AveSoapBaseIcon name="user"/>
          </a>
          <a class="navbar__item-link" href="">
            <AveSoapBaseIcon name="favoriteFill"/>
          </a>
          <a href="">
            <AveSoapBaseIcon name="cart"/>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import AveSoapBaseIcon from "./AveSoapBaseIcon.vue"

export default {
  name: "AveSoapHeader",
  components: {
    AveSoapBaseIcon
  },
  methods: {
    showMenu() {
      this.$refs.openMenu.classList.toggle("navbar-mobile_show");
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  padding-top: 24px;
  padding-bottom: 20px;

  @media (min-width: 992px) {
    padding-top: 55px;
    padding-bottom: 50px;
  }
}

//mobile
.navbar-mobile__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-mobile__menu-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-mobile__menu-btn {
  position: relative;
  width: 18px;
  height: 21px;
}

.navbar-mobile__icon-burger {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -7px;
  margin-left: -9px;
  visibility: visible;
}

.navbar-mobile__icon-close {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -7px;
  margin-left: -7px;
  visibility: hidden;
}
.navbar-mobile_show .navbar-mobile__icon-burger {
  visibility: hidden;
}
.navbar-mobile_show .navbar-mobile__icon-close {
  visibility: visible;
}
.navbar-mobile__logo {
  transform: rotate(90deg);
}

.navbar-mobile__menu {
  position: absolute;
  top: 84px;
  left: 0;
  width: 220px;
  height: 100%;
  background: var(--mainBgMenu);
  z-index: 10;
  visibility: hidden;
  transform: translateX(-220px);
  transition: all 1s ease;
}
.navbar-mobile_show .navbar-mobile__menu{
  visibility: visible;
  transform: translateX(0);
  transition: all 1s ease;
}
.navbar-mobile__menu-blind{
  position: absolute;
  top: 84px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainBgMenu);
  z-index: 5;
  opacity: 0;
  visibility: hidden;
}
.navbar-mobile_show .navbar-mobile__menu-blind{
  visibility: visible;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}
.navbar-mobile__menu-list{
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 24px;
  padding-right: 24px;
}
.navbar-mobile__menu-link{
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #c8c8c8;
}
//desktop
.navbar__wrapper {
  display: none;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 768px) {
    display: flex;
  }
}

.navbar__item {
  display: flex;
}

.navbar__item-line {
  align-items: flex-end;
  line-height: 16px;
}

.navbar__logo {
  margin-right: 20px;
  @media (min-width: 1200px) {
    margin-right: 30px;
  }
}

.navbar__inst {
  margin-right: 16px;
  @media (min-width: 1200px) {
    margin-right: 25px;
  }
}

.navbar__item-link {
  margin-right: 18px;
  @media (min-width: 1200px) {
    margin-right: 40px;
  }
}

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