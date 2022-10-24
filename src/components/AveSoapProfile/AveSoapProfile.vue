<template>
  <section class="profile px-4 container-lg px-lg-0">
<h2>Личный кабинет</h2>
    <keep-alive>
      <component
          :is="activeComponent"
          @goToRegistration="goToRegistration"
          @goToAuthorization="goToAuthorization"/>
    </keep-alive>
  </section>
</template>

<script>
import AveSoapProfileAuthorization from './AveSoapProfileAuthorization.vue'
import AveSoapProfileRegistration from './AveSoapProfileRegistration.vue'
export default {
  name: "AveSoapProfile",
  data() {
    return {
      nameComponent: 'Authorization'
    }
  },
  methods: {
    goToRegistration() {
      this.nameComponent = 'Registration';
    },
    goToAuthorization() {
      this.nameComponent = 'Authorization';
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