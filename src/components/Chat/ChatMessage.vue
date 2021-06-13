<template>
  <div
    class="py-3 flex text-green-50 rounded-md px-2 hover:bg-gray-700 hover:shadow-md bg-transparent dark:border-gray-800 items-start mb-1 text-sm"
  >
    <!--<img
      src="https://github.com/identicons/jasonlong.png"
      class="cursor-pointer w-10 h-10 rounded-3xl mr-3"
    />-->
    <img
      src="https://avatars.githubusercontent.com/u/8203966?s=400&u=b1ea724ca0c592b96893591b6573728ad5d4d485&v=4.png"
      class="cursor-pointer w-10 h-10 mr-3 rounded-3xl"
    />
    <div class="flex-1 overflow-hidden">
      <div class="mb-2">
        <span
          class="mr-2 font-bold user-color cursor-pointer hover:underline"
          >{{ author }}</span
        >
        <span class="text-gray-400 text-xs">{{ time }}</span>
      </div>
      <p v-if="isText" class="leading-normal">
        {{ content }}
      </p>
      <img
        v-if="isImage"
        class="h-96 object-scale-down cursor-pointer"
        :src="content"
        @click="openImage"
      />
      <Embed v-if="isEmbed" v-bind:url="content" />
    </div>
  </div>
</template>

<script>
import Embed from "./Embed";
export default {
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
    messageType: {
      type: String,
      require: true,
    },
  },
  components: {
    Embed,
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    openImage() {
      const shell = require("electron").shell;
      shell.openExternal(this.content);
    },
  },
  computed: {
    isText() {
      return this.messageType === "message";
    },
    isImage() {
      return this.messageType === "image";
    },
    isEmbed() {
      return this.messageType === "embed";
    },
  },
};
</script>
