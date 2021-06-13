<template>
  <div class="bg-gray-700 min-h-screen flex justify-center items-center">
    <div class="w-72 bg-gray-600 rounded-lg p-8 flex flex-col">
      <h2
        class="text-gray-900 text-3xl text-center font-medium title-font mb-5"
      >
        Sign In
      </h2>
      <form id="login" @submit="handleLogin">
        <input
          type="text"
          v-model="username"
          id="username"
          name="username"
          placeholder="Username"
          class="mt-2 w-full bg-gray-500 rounded focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3"
        />
        <input
          type="password"
          v-model="password"
          id="password"
          name="password"
          placeholder="Password"
          class="mt-2 w-full bg-gray-500 rounded focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3"
        />
        <input
          type="submit"
          id="submit"
          name="submit"
          value="Sign In"
          class="cursor-pointer mt-2 w-full rounded text-base outline-none text-gray-100 bg-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </form>
      <p class="text-center text-xs text-purple-200 mt-3">
        Not registered? Sign up
        <router-link to="/register" class="text-purple-300">here.</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin: function (e) {
      this.$store.dispatch("handleLogin", {
        username: this.username,
        password: this.password,
      });
      e.preventDefault();
    },
  },
};
</script>
