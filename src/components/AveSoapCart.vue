<template>
  <section class="cart">
    <h2>Корзина</h2>
    <h4 v-if="!this.$store.getters.getCart.length" class="px-4 container-lg px-lg-0">В корзине пусто...</h4>
    <div v-else class="cart__wrapper container-lg px-0">
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
               v-for="(product, i) in this.$store.getters.getCart"
               :key="i">
            <div class="cart__item  px-4 container-lg px-lg-0">
              <img :src="require('../assets/img/product/' + product.img)" :alt="product.title">
              <div class="cart__title-wrapper">
                <div class="cart__title">
                  <router-link :to=" `/product/${product.id}` ">
                    {{ product.title }}
                  </router-link>
                </div>

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

                  <span class="cart__total-price">{{ totalPrice(product.amount, product.price) }}p</span>

                  <button
                      class="product__btn-remove" @click="deleteFromCart(product.id)">
                    <AveSoapBaseIcon name="close" width="16" height="16"/>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="cart__total-wrapper px-4 px-lg-0">
        <div class="cart__total">
          <span class="cart__total-title">ПРОМОКОД ИЛИ СЕРТИФИКАТ</span>
          <input class="cart__total-input" type="text" placeholder="Код купона">
          <div class="cart__total-product">
            <span>Количество товаров</span>
            <span>{{ amountProduct() }}</span>
          </div>
          <div class="cart__total-price">
            <span>Итого</span>
            <span>{{ amountPrice() }}₽</span>
          </div>
          <button class="cart__total-btn btn">ОФОРМИТЬ ЗАКАЗ</button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import AveSoapBaseIcon from './AveSoapBaseIcon.vue';
// import mapGetters from 'vuex';

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
    deleteFromCart(id) {
      console.log('Cart', id)
      this.$store.commit('deleteFromCart', id);
    },
    minusAmount(amount) {
      console.log('amount--')
      return amount--
    },
    plusAmount(amount) {
      console.log(this.cart[0].amount)
      return amount++
    },
    totalPrice(amount, price) {
      return amount * price;
    },
    amountProduct() {
      return this.cart.reduce((sum, current) => {
        return sum + current.amount
      }, 0)
    },
    amountPrice() {
      return this.cart.reduce((sum, current) => {
        return sum + current.amount * current.price;
      }, 0)
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
  gap: 16px;
  @media (min-width: 992px) {
    gap: 24px;
    flex-direction: row;
  }
}

// cart header
.cart__header {
  border-top: 1px solid var(--mainGrey);
  border-bottom: 1px solid var(--mainGrey);
  padding-top: 8px;
  padding-bottom: 8px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}

.cart__header-name {
  margin-left: 95px;
  min-width: 270px;
}

.cart__header-price {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.cart__header-btn {
  width: 20px;
  height: 20px;
  visibility: hidden;
}

.cart__list-wrapper {
  flex: 1;
}

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

// cart total
.cart__total {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 45px;
  background: white;
  border: 1px solid var(--mainGrey);
  max-width: 340px;
  margin: 0 auto;
}

.cart__total-title {
  margin-bottom: -8px;
}

.cart__total-input {
  max-width: 184px;
  padding: 8px;
}

.cart__total-product,
.cart__total-price {
  display: flex;
  justify-content: space-between;

  & span:nth-child(2) {
    font-weight: bold;
  }
}

.cart__total-btn {
  margin: 0 auto;
  display: block;
  text-align: center;
}
</style>