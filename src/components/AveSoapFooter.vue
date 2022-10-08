<template>
  <footer>
    <h1>Footer</h1>
    <AveSoapBaseIcon name="instagram" viewBox="0 0 15 15" width="15" height="15"/>
    <AveSoapBaseIcon name="home"/>
    <AveSoapBaseIcon name="search"/>
    <AveSoapBaseIcon name="user"/>
    <AveSoapBaseIcon name="cart"/>
    <AveSoapBaseIcon name="favorite"/>
    <AveSoapBaseIcon name="favoriteFill"/>
    <AveSoapBaseIcon name="close"/>
    <AveSoapBaseIcon name="burger"/>
  </footer>
</template>

<script>
import AveSoapBaseIcon from "./AveSoapBaseIcon.vue"

export default {
  name: "AveSoapFooter",
  components: {
    AveSoapBaseIcon
  }
}
</script>

<style scoped>

</style>