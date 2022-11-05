<template>
  <h3>Регистрация</h3>

  <form class="login__wrapper" @submit.prevent="signUp">
    <div class="login__name">
      <span>ИМЯ ПОЛЬЗОВАТЕЛЯ ИЛИ E-MAIL *</span>
      <input
          v-model.lazy="email"
          type="text"
          placeholder="ekaterina.ivanova@gmail.com">
      <span class="error" v-if="v$.email.$error">
       {{ v$.email.$errors[0].$message }}
      </span>
    </div>

    <div class="login__password">
      <span>ПАРОЛЬ *</span>
      <input
          v-model.lazy="password"
          type="password">
      <span class="error" v-if="v$.password.$error">
        {{ v$.password.$errors[0].$message }}
      </span>
    </div>

    <div class="login__password">
      <span>ПОВТАРИТЬ ПАРОЛЬ *</span>
      <input v-model.lazy="confirmPassword" type="password">
      <span class="error" v-if="v$.confirmPassword.$error">
        {{ v$.confirmPassword.$errors[0].$message }}
      </span>
    </div>

    <div class="login__btn-box">
      <div class="login__btn-wrapper">
        <button class="login__btn btn">ЗАРЕГИСТРИРОВАТСЯ</button>
        <input id="login__check" type="checkbox" checked>
        <label for="login__check">Запомнить меня</label>
      </div>

      <button @click="goToAuthorization">Авторизация</button>
    </div>
  </form>
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength, sameAs, helpers} from '@vuelidate/validators'

export default {
  name: "AveSoapProfileRegistration",
  emits: ['goToAuthorization'],
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Обезательное поле", required),
        email: helpers.withMessage("Неправельная почта", email),
      },
      password: {
        required: helpers.withMessage("Обезательное поле", required),
        minLength: helpers.withMessage("Пароль больше 6 символов", minLength(6)),
      },
      confirmPassword: {
        required: helpers.withMessage("Обезательное поле", required),
        sameAs: helpers.withMessage("Пароль не совпадает", sameAs(this.password)),
      }
    }
  },
  methods: {
    async signUp() {
      // this.$store.dispatch('signUp', {
      //   email: this.email,
      //   password: this.password,
      // })
      // const isFormCorrect = await this.v$.$validate()
      this.v$.$validate()
      if (!this.v$.$error) {
        console.log('ok')
      } else {
        console.log('error')
      }
    },
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