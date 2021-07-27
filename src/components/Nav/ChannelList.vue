<template>
  <div class="px-2 py-2 bg-transparent rounded-md dark:bg-gray-800 mb-4">
    <NavItem class="bg-gray-800" route="/newchannel">New Channel</NavItem>
    <ChannelItem
      v-for="channel in channels"
      :key="channel.uuid"
      v-bind:name="channel.name"
      v-bind:id="channel.uuid"
      >{{ channel.name }}</ChannelItem
    >
  </div>
</template>

<script>
import ChannelItem from "./ChannelItem";
import NavItem from "./NavItem.vue";
export default {
  components: {
    ChannelItem,
    NavItem,
  },
  beforeMount() {
    this.$store.dispatch("fetchChannels");
  },
  computed: {
    channels() {
      return this.$store.getters.getChannels;
    },
  },
};
</script>
