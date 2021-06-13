<template class="overflow-y-auto p-4">
  <div class="overflow-y-auto p-4 text-center">
    <div class="home">
      <img alt="Vue logo" class="mx-auto" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
