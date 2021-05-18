<template>
  <div class="font-sans antialiased h-screen flex overflow-y-hidden">
    <div class="flex-1 flex flex-col bg-white overflow-hidden">
      <!-- Top bar -->
      <div class="border-b flex px-6 py-2 items-center flex-none">
        <div class="flex flex-col">
          <h3 class="text-grey-darkest mb-1 font-extrabold">#general</h3>
          <div class="text-grey-dark text-sm truncate">General Chat</div>
        </div>
      </div>
      <!-- Chat messages -->
      <ChatMessageList />
      <ChatInput />
    </div>
  </div>
</template>

<script>
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
export default {
  components: {
    ChatInput,
    ChatMessageList,
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
