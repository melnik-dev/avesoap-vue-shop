<template>
  <section class="not-found container-lg">
    <h2>Ошибка 404</h2>
    <p>Такой страницы не найдено</p>
    <p class="btn__wrapper">
      <router-link to="/home">
        <button class="btn">
          <AveSoapBaseIcon name="home" class="not-found__icon"/>
          Домой
        </button>
      </router-link>
      <br>
      <button class="btn" @click="goBack">Назад</button>
    </p>

  </section>
</template>

<script>
import AveSoapBaseIcon from "./AveSoapBaseIcon.vue";

export default {
  name: "AveSoapNotFound",
  components: {
    AveSoapBaseIcon
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.not-found {
  text-align: center;
}

.not-found__icon {
  fill: white;
  margin-right: 8px;
}

.btn {
  margin-bottom: 16px;
}
</style>