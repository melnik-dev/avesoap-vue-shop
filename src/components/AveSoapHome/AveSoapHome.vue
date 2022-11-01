<template>
<AveSoapHomeHeade/>
<AveSoapHomeСatalog/>
<AveSoapHomeAbout/>
<AveSoapHomeDelivery/>
<AveSoapHomeInstagram/>
<AveSoapHomeStock/>
</template>

<script>
import AveSoapHomeHeade from "./AveSoapHomeHeade.vue";
import AveSoapHomeСatalog from "./AveSoapHomeСatalog.vue";
import AveSoapHomeAbout from "./AveSoapHomeAbout.vue";
import AveSoapHomeDelivery from "./AveSoapHomeDelivery.vue";
import AveSoapHomeInstagram from "./AveSoapHomeInstagram.vue";
import AveSoapHomeStock from "./AveSoapHomeStock.vue";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
//
// gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AveSoapHome",
  components: {
    AveSoapHomeHeade,
    AveSoapHomeСatalog,
    AveSoapHomeAbout,
    AveSoapHomeDelivery,
    AveSoapHomeInstagram,
    AveSoapHomeStock
  },
  // mounted() {
  //   const scrollTrigger = {
  //     trigger: "h2",
  //     toggleActions: "restart none restart none",
  //     start: "top center",
  //   };
  //
  //   gsap.timeline({scrollTrigger})
  //   gsap.from("h2", {
  //     y: "-100%",
  //     opacity: 0,
  //     duration: 1.5,
  //   });
  // }
}
</script>

<style scoped>

</style>