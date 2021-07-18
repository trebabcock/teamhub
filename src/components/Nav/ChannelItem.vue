<template>
  <router-link
    class="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg truncate"
    v-bind:class="{
      'bg-gray-500 text-green-50': isActive,
      'bg-transparent text-green-300': !isActive,
    }"
    :to="this.route"
  >
    <slot></slot>
  </router-link>
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
  computed: {
    isActive() {
      return this.$route.path === "/chat/" + this.id;
    },
    route() {
      return "/chat/" + this.id;
    },
  },
};
</script>
