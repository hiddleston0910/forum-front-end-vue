<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ user.name }}
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled">
            <li>
              <strong>{{ user.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.FavoritedRestaurants.length }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.Followings.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <router-link
            :to="{ name: 'user-edit', params: { id: user.id } }"
            class="btn btn-primary"
          >
            Edit
          </router-link>
          <button
            v-if="!isCurrentUser || isCurrentUser"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
          >
            追蹤
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { emptyImageFilter } from '../utils/mixins'
  import usersAPI from '../apis/users'
  import { Toast } from '../utils/helpers'

  export default {
    mixins: [emptyImageFilter],
    props: {
      user: {
        type: Object,
        require: true,
      },
      isCurrentUser: {
        type: Boolean,
        default: false,
      },
      initialIsFollowed: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isFollowed: this.initialIsFollowed,
      }
    },
    watch: {
      initialIsFollowed(newValue) {
        this.isFollowed = newValue
      },
    },
    methods: {
      async addFollowing(userId) {
        try {
          const { data } = await usersAPI.addFollowing({ userId })

          // console.log('data', data)

          if (data.status !== 'success') {
            throw new Error(data.message)
          }

          this.isFollowed = true
          Toast.fire({
            icon: 'success',
            title: '加入追蹤',
          })
        } catch (error) {
          this.isFollowed = false
          Toast.fire({
            icon: 'error',
            title: '無法加入追蹤，請稍後再試',
          })
        }
      },
      async deleteFollowing(userId) {
        try {
          const { data } = await usersAPI.deleteFollowing({ userId })

          console.log('data', data)

          if (data.status !== 'success') {
            throw new Error(data.message)
          }

          Toast.fire({
            icon: 'success',
            title: '移除追蹤',
          })

          this.isFollowed = false
        } catch (error) {
          this.isFollowed = true

          Toast.fire({
            icon: 'error',
            title: '無法取消追蹤，請稍後再試',
          })
        }
      },
    },
  }
</script>
