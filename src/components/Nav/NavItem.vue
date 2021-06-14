<template>
  <router-link
    class="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg truncate"
    v-bind:class="{
      'bg-gray-500 text-green-50': isActive,
      'bg-transparent text-green-300': !isActive,
    }"
    :to="route"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.route;
    },
  },
};
</script>
