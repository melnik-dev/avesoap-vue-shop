<template>
<AveSoapHomeHeade/>
<AveSoapHomeСatalog/>
<AveSoapHomeAbout/>
<AveSoapHomeDelivery/>
<AveSoapHomeInstagram/>
</template>

<script>
import AveSoapHomeHeade from "./AveSoapHome/AveSoapHomeHeade.vue";
import AveSoapHomeСatalog from "./AveSoapHome/AveSoapHomeСatalog.vue";
import AveSoapHomeAbout from "./AveSoapHome/AveSoapHomeAbout.vue";
import AveSoapHomeDelivery from "./AveSoapHome/AveSoapHomeDelivery.vue";
import AveSoapHomeInstagram from "./AveSoapHome/AveSoapHomeInstagram.vue";
export default {
  name: "AveSoapHome",
  components: {
    AveSoapHomeHeade,
    AveSoapHomeСatalog,
    AveSoapHomeAbout,
    AveSoapHomeDelivery,
    AveSoapHomeInstagram
  }
}
</script>

<style scoped>

</style>