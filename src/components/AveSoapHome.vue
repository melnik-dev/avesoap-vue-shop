<template>
<AveSoapHomeHeade/>
<AveSoapHomeСatalog/>
<AveSoapHomeAbout/>
<AveSoapHomeDelivery/>
</template>

<script>
import AveSoapHomeHeade from "./AveSoapHome/AveSoapHomeHeade.vue";
import AveSoapHomeСatalog from "./AveSoapHome/AveSoapHomeСatalog.vue";
import AveSoapHomeAbout from "./AveSoapHome/AveSoapHomeAbout.vue";
import AveSoapHomeDelivery from "./AveSoapHome/AveSoapHomeDelivery.vue";
export default {
  name: "AveSoapHome",
  components: {
    AveSoapHomeHeade,
    AveSoapHomeСatalog,
    AveSoapHomeAbout,
    AveSoapHomeDelivery
  }
}
</script>

<style scoped>

</style>