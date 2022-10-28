<template>
  <section class="profile px-4 container-lg px-lg-0">
    <h2>Личный кабинет</h2>
    <keep-alive v-if="!this.$store.getters.getIsAuthorization">
      <component
          :is="activeComponent"
          @go-to-registration="goToRegistration"
          @go-to-authorization="goToAuthorization"/>
    </keep-alive>

    <AveSoapProfileLK v-else @log-out="logOut"/>
  </section>
</template>

<script>
import AveSoapProfileAuthorization from './AveSoapProfileAuthorization.vue';
import AveSoapProfileRegistration from './AveSoapProfileRegistration.vue';
import AveSoapProfileLK from './AveSoapProfileLK.vue';

export default {
  name: "AveSoapProfile",
  components: {
    AveSoapProfileAuthorization,
    AveSoapProfileRegistration,
    AveSoapProfileLK
  },
  data() {
    return {
      nameComponent: 'Authorization',
    }
  },
  methods: {
    goToRegistration() {
      this.nameComponent = 'Registration';
    },
    goToAuthorization() {
      this.nameComponent = 'Authorization';
    },
    logOut() {
      this.isAuthorization = false;
      console.log('loaOut')
    }
  },
  computed: {
    activeComponent() {
      return this.nameComponent === 'Authorization' ? AveSoapProfileAuthorization : AveSoapProfileRegistration
    }
  }

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