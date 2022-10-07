<template lang="pug">
div
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
  }
}
</script>

<style>
</style>
