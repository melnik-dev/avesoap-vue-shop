<template>
  <section class="product px-4 container-lg px-lg-0">
    <div class="product__gallery">
      <img :src="require('../assets/img/product/' + product.img)" :alt="product.title">
    </div>

    <div class="product__description">
      <div class="description__cramps">Каталог/</div>

      <div class="description__title-wrapper">
        <h3 class="description__title">{{ product.title }}</h3>
        <div class="description__price-wrapper">
          <span class="description__price">{{ product.price }}</span>
          <span class="description__old-price">{{ product.oldPrice }}</span>
        </div>
      </div>

      <div class="description__amount">{{ product.amount }} в наличии</div>

      <div class="description__btn-wrapper">
        <div class="description__amount-input-wrapper">
          <input
              class="description__amount-input"
              type="number"
              name="amount" min="1" max="99" :value="amount">
          <button class="btn-minus" @click="minusAmount">-</button>
          <button class="btn-plus" @click="plusAmount">+</button>
        </div>

        <button class="description__btn btn" @click="addToCard">Добвить в корзину</button>

        <button class="description__btn-favorite" @click="addFavorite(product.id)">
          <AveSoapBaseIcon v-if="!product.isFavorite" name="favorite" width="13" height="13"/>
          <AveSoapBaseIcon v-if="product.isFavorite" name="favoriteFill" width="13" height="13"/>
        </button>
      </div>
      <div class="description__text" v-html="product.description">

      </div>
    </div>
  </section>
</template>

<script>
import AveSoapBaseIcon from './AveSoapBaseIcon.vue';

export default {
  name: "AveSoapProduct",
  components: {
    AveSoapBaseIcon
  },
  data() {
    return{
      amount: 1
    }
  },
  methods: {
    addToCard() {
      const prod = {
        id: this.product.id,
        title: this.product.title,
        img: this.product.img,
        price: this.product.price,
        amount: this.amount,
      }
      if(this.$store.getters.getCart.length) {
        this.$store.getters.getCart.map(prod => {
          if (prod.id === this.product.id) {
            prod.id = prod.id + this.amount;
          }
        })
      } else {
      this.$store.getters.getCart.push(prod);
      }
      console.log(this.$store.getters.getCart);
    },
    addFavorite(id) {
      this.$store.commit('setFavorite', id);
    },
    minusAmount() {
      this.amount--
    },
    plusAmount() {
      this.amount++
    }
  },
  computed: {
    productId() {
      return this.$route.params.productId;
    },
    product() {
      return this.$store.getters.getProduct.find((product) => product.id === this.productId);
    },
  },
  watch: {
    amount() {
      if (this.amount <= 0 || this.amount > 99) {
        this.amount = 1
      }
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 60px;
  @media (min-width: 576px) {
    flex-direction: row;
    gap: 16px;
  }
  @media (min-width: 768px) {
    gap: 40px;
  }
  @media (min-width: 992px) {
    margin-bottom: 110px;
  }
}

.product__gallery img {
  width: 100%;
}

.product__description,
.product__gallery{
  @media (min-width: 576px) {
    width: 50%;
  }
}


.description__cramps {
  color: var(--lightGrey);
}

.description__title-wrapper {
  display: flex;
  justify-content: space-between;
}

.description__title {
  margin-right: 24px;
}

.description__price-wrapper {
  display: flex;
  flex-direction: column;
}

.description__old-price {
  text-decoration: line-through;
}

.description__price {
  font-weight: 700;
}

.description__amount {
  margin-bottom: 16px;
}

.description__btn-wrapper {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.description__amount-input-wrapper{
  position: relative;
  display: flex;
}
.description__amount-input {
  width: 70px;
  background: var(--mainGrey);
  color: white;
  text-align: center;
}
.btn-minus,
.btn-plus{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 25px;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-minus{
  left: 0;
}
.btn-plus{
  right: 0;
}
.description__btn {
}

.description__btn-favorite {
}

.description__text {
}
</style>