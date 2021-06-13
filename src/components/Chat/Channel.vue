<template class="overflow-y-hidden">
  <div class="font-sans antialiased h-screen flex overflow-y-hidden">
    <div
      class="flex-1 flex flex-col bg-gray-600 dark:bg-channel-bg-dark dark:text-channel-text-dark overflow-hidden"
    >
      <!-- Top bar -->
      <ChatTopBar v-bind:channel="channel" v-bind:description="description" />
      <!-- Chat messages -->
      <ChatMessageList v-bind:channel="channel" />
      <ChatInput v-bind:channel="channel" />
    </div>
  </div>
</template>

<script>
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import ChatTopBar from "./ChatTopBar";
export default {
  data() {
    return {
      description: String(this.channel() + " discussion."),
    };
  },
  components: {
    ChatInput,
    ChatMessageList,
    ChatTopBar,
  },
  computed: {
    channel() {
      return this.$route.params.channel;
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
  width: 0px;
}

::-webkit-scrollbar {
  width: 0px;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
