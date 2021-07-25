<template>
  <div class="flex flex-row h-screen">
    <ChatMenu />
    <Channel />
    <div class="bg-green-400"></div>
  </div>
</template>

<script>
import ChatMenu from "./ChatMenu";
import Channel from "../Chat/Channel.vue";
export default {
  components: {
    ChatMenu,
    Channel,
  },
};
</script>
