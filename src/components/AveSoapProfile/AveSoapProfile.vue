<template>
  <section class="profile px-4 container-lg px-lg-0">
    <h2>Личный кабинет</h2>
    <div class="profile__wripper">
      <div class="profile__link-list-mobile">
        <router-link to="/profile" class="profile__link-mobile active">ПРОФИЛЬ</router-link>
        <router-link to="/profile/orders" class="profile__link-mobile">ЗАКАЗЫ</router-link>
        <router-link to="/profile/change-password" class="profile__link-mobile">ПАРОЛЬ</router-link>
        <button @click="logOut" class="profile__link-mobile">ВЫЙТИ</button>
      </div>
      <div class="profile__link-list-desctop">
        <router-link to="/profile" class="profile__link-desctop active">МОЙ ПРОФИЛЬ</router-link>
        <router-link to="/profile/orders" class="profile__link-desctop">МОИ ЗАКАЗЫ</router-link>
        <router-link to="/profile/change-password" class="profile__link-desctop">СМЕНИТЬ ПАРОЛЬ</router-link>
        <button @click="logOut" class="profile__link-desctop">ВЫЙТИ</button>
      </div>
      <div class="profile__content">
        <router-view></router-view>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "AveSoapProfile",
  methods: {
    logOut() {
      console.log('loagOut')
      this.$store.dispatch('logOutUser')
      this.$router.push('/authorization')
    }
  },
}
</script>

<style scoped lang="scss">
.profile {
  margin-bottom: 60px;
  @media (min-width: 992px) {
    margin-bottom: 110px;
  }
}
.profile__wripper {
  @media (min-width: 576px) {
    display: flex;
    gap: 40px;
  }
  @media (min-width: 992px) {
    gap: 80px;
  }
}
.profile__link-list-mobile{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (min-width: 576px) {
    display: none;
  }
}
.profile__link-mobile {
  padding-bottom: 8px;
  &.active,
  &:hover{
    border-bottom: 1px solid var(--mainGrey);
  }
}
.profile__link-list-desctop{
  display: none;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 576px) {
    display: flex;
  }
}
.profile__link-desctop {
  padding: 8px 16px;
  border-bottom: 1px solid var(--mainGrey);
  &:first-child {
    border-top: 1px solid var(--mainGrey);
  }
  &:last-child {
    margin-top: 32px;
    border-top: 1px solid var(--mainGrey);
    text-align: left;
  }
  &.active,
  &:hover{
    background: var(--mainBgMenu);
  }
}
</style>