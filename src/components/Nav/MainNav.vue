<template>
  <div
    class="w-12 py-2 flex flex-col max-h-screen bg-gray-800 no-scrollbar overflow-y-auto antialiased"
  >
    <div class="flex flex-col h-screen justify-between">
      <MainNavItem icon="home" route="/" />
      <MainNavItem icon="comment-alt" route="/feed" />
      <MainNavItem icon="comments" route="/chat" />
      <MainNavItem icon="hdd" route="/spaces" />
      <MainNavItem class="mb-auto" :icon="['fab', 'github']" route="/git" />
      <MainNavItem icon="cog" route="/settings" />
    </div>
  </div>
</template>

<script>
import MainNavItem from "./MainNavItem.vue";
export default {
  components: {
    MainNavItem,
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
