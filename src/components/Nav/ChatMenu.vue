<template>
  <div
    class="p-2 max-h-screen bg-gray-700 no-scrollbar overflow-y-auto antialiased"
  >
    <ChannelList />
  </div>
</template>

<script>
import ChannelList from "./ChannelList";
export default {
  components: {
    ChannelList,
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
