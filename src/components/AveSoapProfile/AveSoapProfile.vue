<template>
  <section class="profile px-4 container-lg px-lg-0">
    <h2>Личный кабинет</h2>
    <AveSoapProfileLK @log-out="logOut"/>
  </section>
</template>

<script>
import AveSoapProfileLK from './AveSoapProfileLK.vue';
// import {mapGetters} from "vuex";

export default {
  name: "AveSoapProfile",
  components: {
    AveSoapProfileLK
  },
  methods: {
    logOut() {
      // this.isAuthorization = false;
      console.log('loaOut')
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
</style>