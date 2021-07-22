<template>
  <div class="bg-gray-600 min-h-screen py-6 px-24">
    <NewPost />
    <div v-if="newPost" class="mt-2 text-center bg-transparent">
      <p class="text-gray-500 text-sm cursor-pointer">
        Click here to load new posts!
      </p>
    </div>
    <FeedPost
      v-for="post in posts"
      :key="post.id"
      v-bind:author="post.author"
      v-bind:time="formatTime(post.time)"
      v-bind:content="post.content"
      v-bind:id="post.id"
    />
  </div>
</template>

<script>
import NewPost from "./NewPost.vue";
import FeedPost from "./FeedPost.vue";
const moment = require("moment");
export default {
  data() {
    return {
      newPost: false,
    };
  },
  methods: {
    formatTime(time) {
      return moment(time).calendar();
    },
  },
  components: {
    NewPost,
    FeedPost,
  },
  beforeMount() {
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>
