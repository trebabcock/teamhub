<template>
  <router-link
    class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:text-gray-700 focus:outline-none focus:shadow-outline"
    v-bind:class="{ 'bg-gray-200 text-gray-700': isActive }"
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
    isActive: Boolean,
  },
  watch: {
    $route() {
      this.isActive = this.$route.path === this.route;
    },
  },
};
</script>

<!--class="block px-4 py-2 mt-2 text-sm font-semibold
text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent
dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600
dark-mode:focus:text-white dark-mode:hover:text-white
dark-mode:text-gray-200 hover:text-yellow-700 hover:bg-yellow-100
focus:bg-yellow-100 focus:text-yellow-700 focus:outline-none focus:shadow-outline"
    v-bind:class="{ 'bg-yellow-100 text-yellow-700': isActive }"

class="block px-4 py-2 mt-2 text-sm font-semibold
bg-transparent rounded-lg dark-mode:bg-transparent
dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600
dark-mode:focus:text-white dark-mode:hover:text-white
dark-mode:text-gray-200 md:mt-0 hover:text-gray-900
focus:text-gray-900 hover:bg-gray-200 focus:bg-yellow-100
focus:text-yellow-700 focus:outline-none focus:shadow-outline"-->
