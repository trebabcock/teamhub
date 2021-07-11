<template>
  <div
    class="border-b border-gray-800 bg-gray-800 flex px-6 py-2 items-center flex-none"
  >
    <div class="w-full">
      <div class="float-left flex flex-col">
        <h3 class="text-green-200 mb-1 font-extrabold">
          {{ name }}
        </h3>
        <div class="text-gray-300 text-sm truncate">{{ description }}</div>
      </div>
      <div
        @click="deleteChannel"
        class="max-w-max my-auto px-4 py-2 rounded-lg shadow-md bg-red-500 hover:bg-red-400 cursor-pointer float-right"
      >
        <p class="text-white text-sm">Delete Channel</p>
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
    description: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteChannel() {
      this.$store.dispatch("deleteChannel", {
        channel: this.channel,
        description: this.description,
        id: this.id,
      });
      this.$store.dispatch("fetchChannels");
      this.$router.push("/home");
    },
  },
};
</script>
