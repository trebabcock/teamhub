<template>
  <div class="pb-6 mt-2 px-4 flex-none">
    <div
      class="flex rounded-lg chat-input-bg-light overflow-hidden border-0 outline-none focus:outline-none focus:ring-0"
    >
      <input id="fileInput" type="file" style="display: none" />
      <button
        v-on:click="selectFile()"
        id="fileSelect"
        class="text-3xl bg-gray-500 text-gray-300 hover:text-gray-200 hover:bg-gray-700 p-2 cursor-pointer"
      >
        <svg
          class="fill-current h-6 w-6 block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
          />
        </svg>
      </button>
      <input
        id="input_box"
        type="text"
        class="w-full px-4 rounded-r-lg block text-green-100 bg-gray-500 border-0 outline-none focus:outline-none focus:ring-0"
        placeholder="Message #general"
        v-on:keyup.enter="submitMessage"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
const moment = require("moment");

export default {
  name: "ChatInput",
  date() {
    return {
      private: false,
    };
  },
  props: {
    channelID: {
      type: String,
      required: true,
    },
  },
  methods: {
    uploadFile(path) {
      document.getElementById("input_box").value = path;
    },
    submitMessage() {
      let text = document.getElementById("input_box").value;
      if (!text) {
        return;
      }
      var messageType = "";
      if (this.isImage) {
        messageType = "image";
      } else if (this.isEmbed) {
        messageType = "embed";
      } else {
        messageType = "message";
      }

      let mauthor = this.$store.getters.getUser;

      var message = {
        author_id: mauthor.name,
        time: moment.utc(),
        uuid: uuidv4(),
        destination_id: this.channelID,
        type: messageType,
        private: this.private,
        content: text,
      };
      this.$store.dispatch("sendMessage", message);
      document.getElementById("input_box").value = "";
    },
    selectFile() {
      var inp = document.getElementById("fileInput");
      inp.click();
      this.uploadFile(inp.value);
    },
  },
  computed: {
    inputText() {
      return document.getElementById("input_box").value;
    },
    isImage() {
      return false;
    },
    isEmbed() {
      return (
        this.inputText.startsWith("http://") ||
        this.inputText.startsWith("https://")
      );
    },
    embedUrls() {
      var words = this.inputText.split(" ");
      var links = [];
      words.forEach((word) => {
        if (word.startsWith("http://") || word.startsWith("https://")) {
          links.push(word);
        }
      });
      return links;
    },
  },
};
</script>
