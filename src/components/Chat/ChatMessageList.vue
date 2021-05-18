<template>
  <div class="px-6 py-4 flex-1 overflow-y-scroll no-scrollbar">
    <ChatMessage
      v-for="message in messages"
      :key="message"
      v-bind:author="message.author"
      v-bind:content="message.content"
    />
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage";
export default {
  name: "ChatMessageList",
  components: {
    ChatMessage,
  },
  computed: {
    messages() {
      return this.$store.getters.getMessages;
    },
  },
};
</script>
