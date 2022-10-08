<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-lg px-lg-0">
      <div>
        <a class="navbar-brand" href="#">
          <AveSoapBaseIcon
              class="icon-lg"
              name="logo"
              width="39"
              height="61"
              viewBox="0 0 39 61"/>
        </a>
        <AveSoapBaseIcon
            class="icon-lg-inst"
            name="instagram"
            viewBox="0 0 15 15"
            width="15" height="15"/>
        <a href="tel:+79181234567">+7(918)1234567</a>
      </div>

      <div>
        <AveSoapBaseIcon name="home"/>
        <a href="">КАТАЛОГ</a>
        <a href="">ДОСТАВКА И ОПЛАТА</a>
        <a href="">АКЦИИ</a>
      </div>

      <div>
        <a href=""><AveSoapBaseIcon name="search"/></a>
        <a href=""><AveSoapBaseIcon name="user"/></a>
        <a href=""><AveSoapBaseIcon name="favoriteFill"/></a>
        <a href=""><AveSoapBaseIcon name="cart"/></a>
      </div>
    </div>
  </nav>
</template>

<script>
import AveSoapBaseIcon from "./AveSoapBaseIcon.vue"
export default {
  name: "AveSoapHeader",
  components: {
    AveSoapBaseIcon
  }
}
</script>

<style scoped>
@media (min-width: 920px) {
  .icon-lg {
    width: 39px;
    height: 69px;
  }
}
.icon-lg-inst{
  width: 15px;
  height: 15px;
}
</style>