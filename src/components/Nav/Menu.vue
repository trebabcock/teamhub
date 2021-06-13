<template>
  <div
    class="w-64 p-2 flex flex-col max-h-screen bg-gray-700 dark:bg-menu-bg-dark no-scrollbar antialiased"
  >
    <div
      class="flex-shrink-0 px-8 text-green-300 py-4 flex flex-row items-center justify-between"
    >
      <router-link
        to="/"
        class="text-3xl text-green-300 font-bold tracking-widest uppercase rounded-lg"
      >
        FGL Hub
      </router-link>
    </div>
    <nav
      v-bind:class="{ block: chatOpen, hidden: !chatOpen }"
      class="md:block px-4 pb-4 flex flex-1"
    >
      <NavItem route="/">Home</NavItem>
      <NavItem route="/register">Feed</NavItem>
      <NavItem route="/about">Spaces</NavItem>
      <NavItem route="/contact">Git</NavItem>
      <div class="relative flex-grow" x-data="{ chatOpen: false }">
        <button
          v-on:click="toggleChat"
          class="text-green-300 menu-item-default-light flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:menu-item-light focus:outline-none focus:shadow-outline"
        >
          <span>Chat</span>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            :class="{ 'rotate-180': chatOpen, 'rotate-0': !chatOpen }"
            class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-100 transform md:-mt-1"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ChannelList v-bind:chatOpen="chatOpen" v-if="chatOpen" />
      </div>
    </nav>
  </div>
</template>

<script>
import NavItem from "./NavItem";
import ChannelList from "./ChannelList";
export default {
  components: {
    NavItem,
    ChannelList,
  },
  data() {
    return {
      chatOpen: false,
    };
  },
  methods: {
    toggleChat() {
      this.chatOpen = !this.chatOpen;
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
