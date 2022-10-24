<template>
  <h3>Регистрация</h3>

  <div class="login__wrapper">
    <div class="login__name">
      <span>ИМЯ ПОЛЬЗОВАТЕЛЯ ИЛИ E-MAIL *</span>
      <input type="text" placeholder="ekaterina.ivanova@gmail.com">
    </div>

    <div class="login__password">
      <span>ПАРОЛЬ *</span>
      <input type="password">
    </div>

    <div class="login__password">
      <span>ПОВТАРИТЬ ПАРОЛЬ *</span>
      <input type="password">
    </div>

    <div class="login__btn-box">
      <div class="login__btn-wrapper">
        <button class="login__btn btn">ЗАРЕГИСТРИРОВАТСЯ</button>
        <input id="login__check" type="checkbox" checked>
        <label for="login__check">Запомнить меня</label>
      </div>

      <button @click="goToAuthorization">Авторизация</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AveSoapProfileRegistration",
  emits: ['goToAuthorization'],
  methods: {
    goToAuthorization() {
      this.$emit('goToAuthorization')
    }
  }
}
</script>

<style scoped lang="scss">
.login__wrapper {
  max-width: 406px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.login__name,
.login__password {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 272px;
  @media (min-width: 768px) {
    max-width: none;
  }

  & input {
    padding: 8px;
  }


}

.login__name {
  margin-bottom: 12px;
}

.login__password {
  margin-bottom: 20px;
}

.login__btn-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.login__btn-wrapper {
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  & input {
    margin-right: 6px;
  }
}

.login__btn {
  margin-right: 16px;
}
</style>