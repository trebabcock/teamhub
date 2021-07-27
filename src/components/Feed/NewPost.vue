<template>
  <div class="flex flex-col rounded-md bg-gray-700">
    <div
      class="pt-3 pb-2 flex flex-col text-green-50 px-2 bg-transparent dark:border-gray-800 items-start mb-1 text-sm"
    >
      <textarea
        id="post"
        class="w-full resize-y h-16 transition duration-200 ease-in-out bg-gray-600 focus:bg-gray-500 rounded-md px-4 py-2 ring-0 hover:ring-0 focus:ring-0 active:ring-0 outline-none hover:outline-none focus:outline-none active:outline-none"
        placeholder="New post..."
      ></textarea>
    </div>
    <div class="px-2 pb-3 flex max-w-max">
      <div
        v-on:click="sendPost"
        class="px-4 py-2 text-sm rounded-md font-bold text-green-300 transition duration-300 ease-in-out bg-gray-800 hover:bg-gray-500 cursor-pointer"
      >
        Post
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
const moment = require("moment");

export default {
  methods: {
    sendPost() {
      let text = document.getElementById("post").value;
      let mauthor = this.$store.getters.getUser;
      if (!text) {
        return;
      }
      var post = {
        author: mauthor.name,
        type: "text",
        time: moment.utc(),
        content: text,
        id: uuidv4(),
      };
      this.$store.dispatch("sendPost", post);
      document.getElementById("post").value = "";
      this.$store.commit("addPost", post);
    },
  },
};
</script>
