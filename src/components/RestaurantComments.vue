<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in comments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{ comment.User.name }}
          </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
  import { fromNowFilter } from '../utils/mixins'
  import { mapState } from 'vuex'
  import commentsAPI from '../apis/comments'
  import { Toast } from '../utils/helpers'

  export default {
    name: 'RestaurantComments',
    mixins: [fromNowFilter],
    props: {
      comments: {
        type: Array,
        require: true,
      },
    },
    computed: {
      ...mapState(['currentUser']),
    },
    methods: {
      async handleDeleteButtonClick(commentId) {
        try {
          const { data } = await commentsAPI.delete({ commentId })

          if (data.status !== 'success') {
            throw Error(data.message)
          }

          Toast.fire({
            icon: 'success',
            title: '刪除成功',
          })
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '刪除評論錯誤，請稍後再試',
          })
        }
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit('after-delete-comment', commentId)
      },
    },
  }
</script>
