<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :viewBox="viewBox"
      :fill="fill"
      v-html="path">
  </svg>
</template>

<script>
import icons from "../assets/icons";

export default {
  name: "AveSoapBaseIcon",
  props: {
    name: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    viewBox: {
      type: String,
      default: '0 0 448 448'
    },
    fill: {
      type: String,
      default: '#333333'
    }
  },
  data() {
    return {
      path: icons[this.name],
    }
  }
}
</script>

<style scoped>
@media (min-width: 920px) {
  svg {
    width: 20px;
    height: 20px;
  }
}

</style>