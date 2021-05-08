<template>
  <div class="px-6 py-4 flex-1 overflow-y-scroll no-scrollbar">
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage";
export default {
  name: "ChatMessageList",
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
