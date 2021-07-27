<template>
  <div
    class="my-2 overflow-x-hidden pt-3 flex flex-col text-green-50 rounded-md px-2 bg-gray-700 hover:shadow-md bg-transparent dark:border-gray-800 items-start mb-1 text-sm"
  >
    <div
      class="flex flex-row items-center border-b pb-2 border-gray-800 w-full"
    >
      <img
        src="https://i.stack.imgur.com/frlIf.png"
        class="cursor-pointer w-10 h-10 mr-3 rounded-3xl"
      />
      <div class="flex-1 overflow-hidden text-3xl">
        <div class="mb-2">
          <span
            class="mr-2 text-green-300 text-sm cursor-pointer hover:underline"
            >{{ author }}</span
          >
          <span class="text-gray-400 text-xs">{{ time }}</span>
        </div>
      </div>
    </div>
    <div class="pt-4 px-2">
      <!--<p class="break-words whitespace-pre-wrap">{{ content }}</p>-->
      <vue-markdown
        class="whitespace-pre-wrap"
        :source="content"
        :options="mdOptions"
      ></vue-markdown>
    </div>
    <div
      @click="deletePost"
      class="max-w-max my-2 h-full px-4 py-2 rounded-lg shadow-md bg-red-500 hover:bg-red-400 cursor-pointer float-right"
    >
      <p class="text-white text-sm">Delete Post</p>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown-render";
export default {
  data() {
    return {
      mdOptions: {
        html: false,
        linkify: true,
        typographer: false,
        breaks: false,
      },
    };
  },
  props: {
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    VueMarkdown,
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.id);
      this.$store.commit("removePost", this.id);
    },
  },
};
</script>

<style>
h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

h2 {
  font-size: 1.5rem;
  line-height: 2rem;
}

h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

h4 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

code {
  background-color: rgba(75, 85, 99);
  border-radius: 0.375rem;
  display: inline-block;
  /*padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;*/
  padding: 0.25rem;
}

ul {
  margin-left: 1rem;
  list-style-type: disc;
}

a,
a:visited,
a:active {
  color: rgba(110, 231, 183);
  text-decoration: none;
}

a:hover {
  color: rgba(167, 243, 208);
  text-decoration: underline;
}
</style>
