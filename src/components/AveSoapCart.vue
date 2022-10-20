<template>
  <section class="cart">
    <h2>Корзина</h2>
    <div class="cart__wrapper">
      <div class="cart__list-wrapper">
        <div class="cart__header">
          <div class="cart__header-wrapper px-4 container-lg px-lg-0 d-flex">
          <div class="cart__header-name">Товар</div>
          <div class="cart__header-price">
            <span>Цена</span>
            <span>Количество</span>
            <span>Стоимость</span>
            <button class="cart__header-btn"></button>
          </div>
          </div>
        </div>
        <div class="cart__list">

          <div class="cart__item-wrapper"
               v-for="(product, i) in cart"
               :key="i">
          <div class="cart__item  px-4 container-lg px-lg-0">
            <img :src="require('../assets/img/product/' + product.img)" :alt="product.title">
            <div class="cart__title-wrapper">
              <div class="cart__title">{{ product.title }}</div>

              <div class="cart__amount-wrapper">
                <span class="cart__price">{{ product.price }}р</span>

                <div class="cart__amount-input-wrapper">
                  <input
                      class="cart__amount-input"
                      type="number"
                      name="amount" :value="product.amount">
                  <button class="btn-minus" @click="product.amount--">-</button>
                  <button class="btn-plus" @click="product.amount++">+</button>
                </div>

                <span class="cart__total-price">1000p</span>

                <button
                    class="product__btn-remove" @click="removeCart(product.id)">
                  <AveSoapBaseIcon name="close" width="16" height="16"/>
                </button>
              </div>

            </div>

          </div>
          </div>
        </div>
      </div>
      <div class="cart__total"></div>
    </div>
  </section>
</template>

<script>
import AveSoapBaseIcon from './AveSoapBaseIcon.vue'

export default {
  name: "AveSoapCart",
  components: {
    AveSoapBaseIcon
  },
  data() {
    return {
      cart: this.$store.getters.getCart,
    }
  },
  methods: {
    removeCart(id) {
      console.log('removeCart')
      this.$store.commit('delCart', id);
    },
    minusAmount(amount) {
      console.log('amount--')
     return amount--
    },
    plusAmount(amount) {
      console.log(this.cart[0].amount)
      return amount++
    }
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
.cart {
  margin-bottom: 60px;
  @media (min-width: 992px) {
    margin-bottom: 110px;
  }
}

.cart__wrapper {
  display: flex;
  flex-direction: column;
}
// cart header
.cart__header{
  border-top: 1px solid var(--mainGrey);
  border-bottom: 1px solid var(--mainGrey);
  padding-top: 8px;
  padding-bottom: 8px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
.cart__header-name{
  margin-left: 95px;
  min-width: 270px;
}
.cart__header-price{
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.cart__header-btn{
  width: 20px;
  height: 20px;
  visibility: hidden;
}

.cart__list {}
.cart__item-wrapper {
  padding-top: 8px;
  padding-bottom: 8px;
  border-top: 1px solid var(--mainGrey);
  border-bottom: 1px solid var(--mainGrey);
  @media (min-width: 768px) {
    width: 100%;
    border-top: none;
  }
}

.cart__item {
  display: flex;
  flex-direction: row;

  & img {
    width: 52px;
    height: 52px;
    margin-right: 12px;
    @media (min-width: 768px) {
      width: 83px;
      height: 83px;
    }
  }
}

.cart__title-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.cart__title {
  margin-bottom: 12px;
  @media (min-width: 768px) {
    width: 270px;
  }
}

.cart__amount-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    flex: 1;
  }
}

.product__btn-remove {
  border-radius: 50%;
  background: white;
}

.cart__total {
}

// btn plus minus
.cart__amount-input-wrapper {
  position: relative;
  display: flex;
}

.cart__amount-input {
  width: 70px;
  background: var(--mainGrey);
  color: white;
  text-align: center;
}

.btn-minus,
.btn-plus {
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

.btn-minus {
  left: 0;
}

.btn-plus {
  right: 0;
}
</style>