<template>
<div class="welcom">
  <p>Добро пожаловать admin (не admin? <button @click="logOut">Выйти</button>).</p>
  <p>Из главной страницы аккаунта вы можете посмотреть ваши недавние заказы,
  настроить адрес доставки, а также изменить пароль и основную информацию.</p>
</div>
</template>

<script>
export default {
  name: "AveSoapProfileLK",
  emits: ['logOut'],
  methods: {
    logOut() {
      this.$emit('logOut');
    }
  }
}
</script>

<style scoped>

</style>