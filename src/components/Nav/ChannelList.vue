<template>
  <div
    v-bind:x-show="chatOpen"
    x-transition:enter="transition ease-out duration-100"
    x-transition:enter-start="transform opacity-0 scale-95"
    x-transition:enter-end="transform opacity-100 scale-100"
    x-transition:leave="transition ease-in duration-75"
    x-transition:leave-start="transform opacity-100 scale-100"
    x-transition:leave-end="transform opacity-0 scale-95"
    class="absolute right-0 w-full mt-2 origin-top-right rounded-md bg-transparent"
  >
    <div class="px-2 py-2 bg-transparent rounded-md dark:bg-gray-800 mb-4">
      <NavItem route="/chat/General">General</NavItem>
      <NavItem route="/chat/Programming">Programming</NavItem>
      <User route="/user" user="Tre" status="online" />
    </div>
  </div>
</template>

<script>
import NavItem from "./NavItem";
import User from "./User";
export default {
  props: {
    chatOpen: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    NavItem,
    User,
  },
};
</script>
