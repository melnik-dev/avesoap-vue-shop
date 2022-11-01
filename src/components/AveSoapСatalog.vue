<template>
  <section class="catalog px-4 container-lg px-lg-0">
    <h2 class="catalog-title">
      {{ categoryTitle === 'Все' ? 'Каталог' : categoryTitle }}
    </h2>

    <div class="catalog__filter-wrapper">

      <select v-model="activeCategory" class="catalog__select-category" name="category">
        <option
            v-for="(option, i) in getCategory"
            :key="i"
            :value="option.id"
            :name="option.title">
          {{ option.title }}
        </option>
      </select>

      <div class="catalog__category-list">
        <span
            v-for="(item, i) in getCategory"
            @click="choiceCategory(item.id, item.title)"
            :key="i"
            class="catalog__category-link">
          {{ item.title }}
        </span>
      </div>

      <div class="catalog__filter">
        <p><select
            v-model="actualFilter"
            class="catalog__select-filter"
            name="actual-filter">
          <option value="popularity">по популярности</option>
          <option value="ascending-price">по возрастанию цены</option>
          <option value="descending-price">по убыванию цены</option>
          <option value="discount">по скидке</option>
        </select></p>
        <div class="catalog__checkbox-filter">
          <div class="checkbox__wrap">
            <input v-model="isNoArtificial" id="checkbox__one" type="checkbox">
            <label for="checkbox__one">Без искусственных компонентов</label>
          </div>
          <div class="checkbox__wrap">
            <input v-model="isHypoallergenic" id="checkbox__two" type="checkbox">
            <label for="checkbox__two">Гипоаллергенно</label>
          </div>
        </div>
      </div>
    </div>

    <div class="catalog__product-list row">
      <AveSoapProductElm
          v-for="(item, i) in filterProduct()"
          :key="i"
          :product="true"
          :set-data="item"/>
    </div>

  </section>
</template>

<script>
import AveSoapProductElm from "./AveSoapProductElm.vue"
import {mapGetters} from 'vuex'

export default {
  name: "AveSoapСatalog",
  components: {
    AveSoapProductElm
  },
  data() {
    return {
      activeCategory: 'all',
      categoryTitle: 'Все',
      actualFilter: 'popularity',
      isHypoallergenic: false,
      isNoArtificial: false
    }
  },
  methods: {
    filterProduct() {
      this.$router.push({path: 'catalog', query: {category: this.activeCategory}});
      // window.history.pushState(
      //     null,
      //     '',
      //     `${window.location.pathname}?category=${this.activeCategory}`
      // );

      switch (this.actualFilter) {
        case 'popularity':
          this.getProduct;
          break;

        case 'ascending-price':
        case 'descending-price':
          this.getProduct.sort((a, b) => {
            if (this.actualFilter === 'ascending-price') {
              return a.price - b.price
            }
            if (this.actualFilter === 'descending-price') {
              return b.price - a.price
            }
          });
          break;

        case 'discount':
          console.log('discount')
          break;
      }

      if (this.activeCategory === 'all') {
        return this.getProduct.filter(prod => {
          if (this.isNoArtificial && this.isHypoallergenic) {
            return prod.isNoArtificial && prod.isHypoallergenic;
          }
          if (this.isNoArtificial) {
            return prod.isNoArtificial;
          }
          if (this.isHypoallergenic) {
            return prod.isHypoallergenic;
          }
          return this.getProduct
        });
      }
      return this.getProduct.filter(prod => {
        if (this.isNoArtificial && this.isHypoallergenic) {
          return prod.сategory === this.activeCategory && prod.isNoArtificial && prod.isHypoallergenic;
        }
        if (this.isNoArtificial) {
          return prod.сategory === this.activeCategory && prod.isNoArtificial;
        }
        if (this.isHypoallergenic) {
          return prod.сategory === this.activeCategory && prod.isHypoallergenic;
        }
        return prod.сategory === this.activeCategory;
      });
    },
    choiceCategory(id, cat) {
      this.activeCategory = id;
      this.categoryTitle = cat;
    },
  },
  computed: {
    ...mapGetters([
      'getCategory',
      'getProduct',
    ])
  },
  created() {
    this.activeCategory = this.$route.query.category;
  }
}
</script>

<style scoped lang="scss">
.catalog {
  margin-bottom: 60px;
  @media (min-width: 992px) {
    margin-bottom: 110px;
  }
}

.catalog-title {
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 992px) {
    margin-bottom: 32px;
  }
}

.catalog__product-list {
  row-gap: 16px;
  @media (min-width: 992px) {
    row-gap: 24px;
  }
}

.catalog__filter-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.catalog__select-category {
  border-radius: 0;
  width: 272px;
  @media (min-width: 992px) {
    display: none;
  }
}

.catalog__filter {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  @media (min-width: 576px) {
    flex-direction: row;
  }
}

.catalog__select-filter {
  width: 128px;
  border-radius: 0;
  background: var(--mainGrey);
  color: white;
  padding: 6px;
  @media (min-width: 768px) {
    width: 168px;
  }
}

.catalog__checkbox-filter {
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 530px) {
    flex-direction: row;
  }
}

.checkbox__wrap {
  display: flex;
  align-items: center;
  gap: 6px;
}

.catalog__category-list {
  display: none;
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }
}

.catalog__category-link {
  margin-right: 24px;
  text-align: center;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
}
</style>