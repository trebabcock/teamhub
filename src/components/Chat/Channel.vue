<template class="overflow-y-hidden">
  <div class="font-sans antialiased h-screen flex overflow-y-hidden">
    <div
      class="flex-1 flex flex-col bg-gray-600 dark:bg-channel-bg-dark dark:text-channel-text-dark overflow-hidden"
    >
      <!-- Top bar -->
      <ChatTopBar v-bind:id="channel.uuid" />
      <!-- Chat messages -->
      <ChatMessageList
        v-bind:channelName="channel.name"
        v-bind:channelID="channel.uuid"
      />
      <ChatInput
        v-bind:channelName="channel.name"
        v-bind:channelID="channel.uuid"
      />
    </div>
  </div>
</template>

<script>
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import ChatTopBar from "./ChatTopBar";
export default {
  components: {
    ChatInput,
    ChatMessageList,
    ChatTopBar,
  },
  computed: {
    channel() {
      return this.$store.getters.getCurrentChannel;
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
