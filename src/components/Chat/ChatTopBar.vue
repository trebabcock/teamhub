<template>
  <div
    class="border-b border-gray-800 bg-gray-800 flex px-6 py-2 items-center flex-none"
  >
    <div class="w-full mx-auto">
      <div class="float-left flex flex-col">
        <h3 class="text-green-200 mb-1 font-extrabold">
          {{ channel.name }}
        </h3>
        <div class="text-gray-300 text-sm truncate max-w-none">
          <p class="truncate">
            {{ channel.description }}
          </p>
        </div>
      </div>
      <!--<div class="bg-gray-900 h-full float-right">
        <div
          @click="deleteChannel"
          class="max-w-max my-2 h-full px-4 py-2 rounded-lg shadow-md bg-red-500 hover:bg-red-400 cursor-pointer float-right"
        >
          <p class="text-white text-sm">Delete Channel</p>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    channel() {
      return this.$store.getters.getChannel(this.id)[0];
    },
  },
  methods: {
    deleteChannel() {
      let channel = {
        channel: this.channel,
        description: this.description,
        uuid: this.id,
      };
      this.$store.dispatch("deleteChannel", channel);
      this.$store.commit("removeChannel", channel.uuid);
      this.$router.push("/");
    },
  },
};
</script>
