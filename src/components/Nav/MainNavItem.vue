<template>
  <router-link class="mx-auto" :to="route" tag="div">
    <font-awesome-icon
      :icon="icon"
      class="mx-auto my-1 w-12 h-12 cursor-pointer"
      v-bind:class="{
        'text-green-300 ': isActive,
        'text-gray-300': !isActive,
      }"
      size="lg"
    />
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
    icon: {
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
