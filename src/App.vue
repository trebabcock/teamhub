<template>
  <div id="app">
    <div v-if="loggedIn" class="h-screen flex">
      <MainNav />
      <div class="flex-1 flex overflow-hidden">
        <div class="antialiased flex-1 overflow-y-auto">
          <router-view />
        </div>
      </div>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #515d66;
}
</style>

<script>
import MainNav from "./components/Nav/MainNav.vue";
export default {
  components: { MainNav },
  mounted() {
    this.$store.dispatch("fetchMessages");
    this.$store.dispatch("fetchUsers");
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },
  beforeMount() {
    this.loggedIn = this.$store.getters.getLoggedIn;
  },
  computed: {
    loggedIn() {
      return this.$store.getters.getLoggedIn;
    },
  },
  watch: {},
};
</script>
