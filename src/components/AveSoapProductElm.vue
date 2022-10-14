<template>
  <div class="product__wrapper col-6 col-sm-4 col-lg-3">
    <router-link
        :to="{ path: `${toPath}${setData.link}`}"
        href=""
        class="product__item">
      <img :src="require('../assets/img/' + toAssets + setData.img)" :alt="setData.name">
      <span :class="['product__title', { 'title_up' : catalog }]">{{ setData.title }}</span>
      <div v-if="product || favorite"
           class="product__price">
        <span v-if="setData.isSale" class="product__old-price">{{ setData.oldPrice }}</span>
        <span class="product__new-price">{{ setData.price }}</span>
      </div>
    </router-link>
    <button v-if="product"
            class="product__btn-favorite" @click="addFavorite">
      <AveSoapBaseIcon v-if="!isFavorite" name="favorite" width="13" height="13"/>
      <AveSoapBaseIcon v-if="isFavorite" name="favoriteFill" width="13" height="13"/>
    </button>
    <button v-if="favorite"
            class="product__btn-remove"  @click="removeFavorite">
      <AveSoapBaseIcon name="close" width="16" height="16"/>
    </button>
    <span v-if="setData.isSale" class="product__sale">Распродажа</span>
  </div>
</template>

<script>
import AveSoapBaseIcon from "./AveSoapBaseIcon.vue";

export default {
  name: "AveSoapProductElm",
  components: {
    AveSoapBaseIcon
  },
  props: {
    setData: {
      type: Object,
      require: false
    },
    catalog: {
      type: Boolean,
      default: false
    },
    product: {
      type: Boolean,
      default: false
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toPath: this.catalog ? '/catalog/' : '/product/',
      toAssets: this.catalog ? 'home-catalog/' : 'product/',
      isFavorite: false
    }
  },
  methods: {
    addFavorite() {
      console.log("addFavorite")
      this.isFavorite = !this.isFavorite
    },
    removeFavorite() {
      console.log("removeFavorite")
    }
  }
}
</script>

<style scoped lang="scss">
.product__wrapper {
  position: relative;

}

.product__item {
  flex-direction: column;
  display: flex;
  align-items: center;

  & img {
    width: 100%;

  }
}

.product__title,
.product__price {
  text-align: center;
  margin-top: 8px;
  @media (min-width: 992px) {
    margin-top: 16px;
  }
}

.product__price {
  margin: 0;
}

.product__old-price {
  text-decoration: line-through;
  margin-right: 6px;
}

.product__new-price {
  font-weight: 600;
}

.title_up {
  @media (min-width: 992px) {
    text-transform: uppercase;
  }
}

.product__btn-favorite,
.product__btn-remove {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 6px;
  right: 18px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;

  &:hover {
    background: var(--mainBgMenu);
  }

  & svg {
    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 768px) {
    top: 12px;
    right: 24px;
    width: 34px;
    height: 34px;
  }
  @media (min-width: 992px) {
    right: 24px;
  }
}

.product__btn-remove svg {
  margin-right: -4px;
  margin-top: -2px;
}

.product__sale {
  position: absolute;
  top: 6px;
  left: 14px;
  width: 65px;
  height: 16px;
  background: white;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 11px;
    width: 84px;
    height: 20px;
    top: 12px;
  }
  @media (min-width: 992px) {
    left: 24px;
  }

}
</style>