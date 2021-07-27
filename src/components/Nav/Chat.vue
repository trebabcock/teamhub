<template>
  <div class="flex flex-row h-screen">
    <ChatMenu class="lg:w-1/6 md:w-1/5 w-1/5" />
    <Channel class="lg:w-2/3 md:w-3/5 w-3/5" />
    <div class="lg:w-1/6 md:w-1/5 w-1/5 px-2 py-4 h-screen bg-gray-700">
      <h1 class="text-2xl ml-4 font-bold text-green-300">Users</h1>
      <div
        v-for="user in users"
        :key="user.uuid"
        class="block px-4 py-2 mt-2 text-gray-300 text-sm font-semibold hover:bg-gray-600 hover:text-green-300 rounded-lg cursor-pointer hover:no-underline"
      >
        <div class="flex flex-row">
          <img
            src="https://i.stack.imgur.com/frlIf.png"
            class="cursor-pointer w-8 h-8 mr-2 rounded-3xl"
          />
          <div class="truncate my-auto">
            <p class="my-auto truncate">{{ user.name }}</p>
          </div>
        </div>
      </div>
    </div>
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
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
};
</script>
