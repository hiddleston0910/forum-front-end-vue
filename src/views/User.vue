<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="user.Followings" />

        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="user.Followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="user.Comments" />

        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="user.FavoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import UserProfileCard from '../components/UserProfileCard'
  import UserCommentsCard from '../components/UserCommentsCard'
  import UserFollowersCard from '../components/UserFollowersCard'
  import UserFollowingsCard from '../components/UserFollowingsCard'
  import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard'
  import usersAPI from '../apis/users'
  import { Toast } from '../utils/helpers'

  export default {
    name: 'User',
    components: {
      UserProfileCard,
      UserCommentsCard,
      UserFollowersCard,
      UserFollowingsCard,
      UserFavoritedRestaurantsCard,
    },
    data() {
      return {
        user: {
          id: -1,
          name: '',
          email: '',
          password: '',
          isAdmin: false,
          image: '',
          createdAt: '',
          updatedAt: '',
          Comments: [],
          FavoritedRestaurants: [],
          Followers: [],
          Followings: [],
        },
        isFollowed: false,
      }
    },
    created() {
      const { id: userId } = this.$route.params
      this.fetchUser({ userId })
    },
    beforeRouteUpdate(to, from, next) {
      const { id: userId } = to.params
      this.fetchUser({ userId })
      next()
    },
    computed: {
      ...mapState(['currentUser']),
    },
    methods: {
      async fetchUser({ userId }) {
        try {
          const { data } = await usersAPI.get({ userId })
          const { profile, isFollowed } = { ...data }

          this.user = profile

          this.user = {
            ...this.user,
            Comments: this.user.Comments.filter((comment) => {
              return comment.Restaurant && comment.Restaurant.id
            }),
          }

          this.isFollowed = isFollowed
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '取得使用者錯誤，請稍後再試',
          })
        }
      },
    },
  }
</script>
