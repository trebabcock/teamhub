<template>
  <div
    class="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-600 hover:text-green-300 rounded-lg cursor-pointer truncate hover:no-underline"
    v-bind:class="{
      'text-green-300 bg-gray-600': isActive,
      'text-gray-300': !isActive,
    }"
    @click="setChannel"
  >
    <div class="flex flex-row">
      <font-awesome-icon
        class="mr-1 my-auto text-gray-500"
        :icon="['fas', 'hashtag']"
        size="asdf"
      />
      <div class="truncate my-auto">
        <slot class="my-auto"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    setChannel() {
      this.$store.commit("setCurrentChannel", this.channel);
    },
  },
  computed: {
    channel() {
      return this.$store.getters.getChannel(this.id)[0];
    },
    currentChannel() {
      return this.$store.getters.getCurrentChannel;
    },
    isActive() {
      return this.currentChannel.uuid == this.id;
    },
  },
};
</script>
