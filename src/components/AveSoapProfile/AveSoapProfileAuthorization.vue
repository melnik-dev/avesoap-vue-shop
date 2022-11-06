<template>
  <section class="section px-4 container-lg px-lg-0">
    <h3>Авторизация</h3>

    <div class="login__wrapper">
      <div class="login__name">
        <span>ИМЯ ПОЛЬЗОВАТЕЛЯ ИЛИ E-MAIL *</span>
        <input v-model.lazy="email" type="text" placeholder="ekaterina.ivanova@gmail.com">
        <span class="error" v-if="v$.email.$error">
       {{ v$.email.$errors[0].$message }}
      </span>
      </div>

      <div class="login__password">
        <span>ПАРОЛЬ *</span>
        <input v-model.lazy="password" type="password">
        <span class="error" v-if="v$.password.$error">
        {{ v$.password.$errors[0].$message }}
      </span>
      </div>

      <div class="login__btn-box">
        <div class="login__btn-wrapper">
          <button
              @click="logIn"
              class="login__btn btn">
            ВОЙТИ
          </button>
          <input id="login__check" type="checkbox" checked>
          <label for="login__check">Запомнить меня</label>
        </div>

        <button>Забыли свой пароль?</button>
        <button @click="goToRegistration">Регистрация</button>
      </div>
    </div>

  </section>
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength, helpers} from '@vuelidate/validators'

export default {
  name: "AveSoapProfileAuthorization",
  data() {
    return {
      v$: useVuelidate(),
      email: 'avesoap@avesoap.ru',
      password: 'avesoap'
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
    }
  },
  methods: {
    logIn() {
      this.v$.$validate()
      if (!this.v$.$error) {
        console.log('ok')
        this.$store.dispatch('logIn', {
          email: this.email,
          password: this.password,
        })
            .then(() => this.$router.push('profile'))
            .then(() => console.log(this.$store.getters.getIsAuthorizationUser))
            .catch(error => console.log(error))
      } else {
        console.log('error')
      }
    },
    goToRegistration() {
      this.$router.push('registration');
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