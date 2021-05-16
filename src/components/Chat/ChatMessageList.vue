<template>
  <div class="px-6 py-4 flex-1 overflow-y-scroll no-scrollbar">
    <ChatMessage
      v-for="message in messages"
      :key="message"
      v-bind:text="message.text"
    />
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage";
export default {
  name: "ChatMessageList",
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  components: {
    ChatMessage,
  },
  methods: {
    scrollToEnd() {
      var content = this.$refs.container;
      content.scrollTop = content.scrollHeight;
    },
  },

  updated() {
    // This will be called when the component updates
    // try toggling a todo
    this.scrollToEnd();
  },

  mounted() {
    // This will be called on load
    this.scrollToEnd();
  },
};
</script>
