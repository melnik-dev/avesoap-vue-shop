<template lang="pug">
.wrapper
  AveSoapHeader
  AveSoapMain
  AveSoapFooter
</template>

<script>
import AveSoapHeader from './components/AveSoapHeader.vue';
import AveSoapFooter from "./components/AveSoapFooter.vue";
import AveSoapMain from './components/AveSoapMain.vue';

export default {
  name: 'App',
  components: {
    AveSoapHeader,
    AveSoapMain,
    AveSoapFooter
  },
  created() {
this.$store.dispatch('checkUser')
  }
}
</script>

<style>
</style>
