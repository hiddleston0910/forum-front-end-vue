<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category ? restaurant.Category.name : '未分類' }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.opening_hours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
        class="btn btn-primary btn-border mr-2"
      >
        Dashboard
      </router-link>
      <!-- <a class="btn btn-primary btn-border mr-2" href="#">Dashboard</a> -->

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.stop.prevent="deleteFavorite"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="deleteLike"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RestaurantDetail',
    props: {
      initialRestaurant: {
        type: Object,
      },
    },
    data() {
      return {
        restaurant: this.initialRestaurant,
      }
    },
    watch: {
      initialRestaurant(newValue) {
        this.restaurant = {
          ...this.restaurant,
          ...newValue,
        }
      },
    },
    methods: {
      addFavorite() {
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true,
        }
      },
      deleteFavorite() {
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false,
        }
      },
      addLike() {
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        }
      },
      deleteLike() {
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        }
      },
    },
  }
</script>

<style scoped>
  .col-lg-8 p,
    .contact-info-wrap li,
    .contact-info-wrap strong {
      font-size: 17px;
      font-family: serif;
    }
</style>
