<template>
  <router-link
    class="block px-4 py-2 mt-2 text-green-300 text-sm font-semibold rounded-lg truncate bg-transparent"
    :to="route"
  >
    <div class="flex flex-row">
      <img
        src="https://avatars.githubusercontent.com/u/8203966?s=400&u=b1ea724ca0c592b96893591b6573728ad5d4d485&v=4.png"
        class="cursor-pointer w-6 h-6 mr-3 rounded-3xl"
        v-bind:class="{
          'border-2 border-green-500': isOnline,
          'border-2 border-yellow-500': isAway,
          'border-2 border-red-500': isDND,
        }"
      />
      <p>{{ user }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.route;
    },
    isOnline() {
      return this.status === "online";
    },
    isAway() {
      return this.status === "away";
    },
    isDND() {
      return this.status === "dnd";
    },
  },
};
</script>
