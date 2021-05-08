<template>
  <div id="app" class="h-screen flex">
    <Menu />
    <div class="flex-1 flex overflow-hidden">
      <div class="flex-1 overflow-y-auto p-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import Menu from "./components/Nav/Menu";
export default {
  components: { Menu },
};
</script>
