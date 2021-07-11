<template class="overflow-y-hidden">
  <div class="font-sans antialiased h-screen flex overflow-y-hidden">
    <div
      class="flex-1 flex flex-col bg-gray-600 dark:bg-channel-bg-dark dark:text-channel-text-dark overflow-hidden"
    >
      <!-- Top bar -->
      <ChatTopBar
        v-bind:name="channel.name"
        v-bind:description="channel.description"
        v-bind:id="channel.id"
      />
      <!-- Chat messages -->
      <ChatMessageList v-bind:channel="channel.name" />
      <ChatInput v-bind:channel="channel.name" />
    </div>
  </div>
</template>

<script>
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import ChatTopBar from "./ChatTopBar";
export default {
  /*data() {
    return {
      channel: this.$store.getters.getChannel(this.$route.params.channel),
    };
  },*/
  components: {
    ChatInput,
    ChatMessageList,
    ChatTopBar,
  },
  computed: {
    channel() {
      return this.$store.getters.getChannel(this.$route.params.channel)[0];
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
