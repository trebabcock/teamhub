<template>
  <router-link
    class="block antialiased px-4 py-2 mt-2 text-sm font-semibold truncate"
    v-bind:class="{
      'bg-gray-800 text-green-300 border-r-2 border-green-300 drop-shadow-lg': isActive,
      'bg-transparent text-green-50': !isActive,
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
