<template>
  <div class="pb-6 mt-2 mb-2 px-4 flex-none">
    <div
      class="flex rounded-lg bg-gray-200 overflow-hidden border-0 outline-none focus:outline-none focus:ring-0"
    >
      <span class="text-3xl text-grey p-2">
        <svg
          class="fill-current h-6 w-6 block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
          />
        </svg>
      </span>
      <input
        id="input_box"
        type="text"
        class="w-full px-4 rounded-lg block bg-gray-200 border-0 outline-none focus:outline-none focus:ring-0"
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
  props: {
    channel: {
      type: String,
      required: true,
    },
  },
  methods: {
    submitMessage() {
      let text = document.getElementById("input_box").value;
      if (!text) {
        return;
      }
      var message = {
        author: "Tre (LM-003)",
        time: moment.utc(),
        uuid: uuidv4(),
        destination: this.channel,
        type: "message",
        content: text,
      };
      this.$store.dispatch("sendMessage", message);
      document.getElementById("input_box").value = "";
    },
  },
};
</script>
