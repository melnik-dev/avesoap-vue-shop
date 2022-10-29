<template>
<AveSoapHomeHeade/>
<AveSoapHomeСatalog/>
<AveSoapHomeAbout/>
<AveSoapHomeDelivery/>
<AveSoapHomeInstagram/>
<AveSoapHomeStock/>
</template>

<script>
import AveSoapHomeHeade from "./AveSoapHome/AveSoapHomeHeade.vue";
import AveSoapHomeСatalog from "./AveSoapHome/AveSoapHomeСatalog.vue";
import AveSoapHomeAbout from "./AveSoapHome/AveSoapHomeAbout.vue";
import AveSoapHomeDelivery from "./AveSoapHome/AveSoapHomeDelivery.vue";
import AveSoapHomeInstagram from "./AveSoapHome/AveSoapHomeInstagram.vue";
import AveSoapHomeStock from "./AveSoapHome/AveSoapHomeStock.vue";
export default {
  name: "AveSoapHome",
  components: {
    AveSoapHomeHeade,
    AveSoapHomeСatalog,
    AveSoapHomeAbout,
    AveSoapHomeDelivery,
    AveSoapHomeInstagram,
    AveSoapHomeStock
  }
}
</script>

<style scoped>

</style>