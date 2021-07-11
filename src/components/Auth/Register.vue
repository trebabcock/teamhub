<template>
  <div class="bg-gray-700 min-h-screen flex justify-center items-center">
    <div class="w-72 bg-gray-600 rounded-lg p-8 flex flex-col">
      <h2
        class="text-green-300 text-3xl text-center font-medium title-font mb-5"
      >
        Sign Up
      </h2>
      <form id="app" @submit.prevent="handleRegister">
        <input
          type="text"
          id="name"
          v-model="name"
          name="name"
          placeholder="Full Name"
          class="mt-2 w-full bg-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-200 py-1 px-3"
        />
        <input
          type="text"
          id="username"
          v-model="username"
          name="username"
          placeholder="Username"
          class="mt-2 w-full bg-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-200 py-1 px-3"
        />
        <input
          type="password"
          id="password"
          v-model="password"
          name="epasswordmail"
          placeholder="Password"
          class="mt-2 w-full bg-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-200 py-1 px-3"
        />
        <input
          type="password"
          id="cpassword"
          v-model="cpassword"
          name="cpassword"
          placeholder="Confirm Password"
          class="mt-2 w-full bg-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-200 py-1 px-3"
        />
        <input
          type="submit"
          id="submit"
          name="submit"
          value="Sign Up"
          class="cursor-pointer mt-2 w-full rounded-lg text-base outline-none text-green-300 bg-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </form>
      <p class="text-center text-xs text-purple-200 mt-3">
        Already registered? Sign in
        <router-link to="/" class="text-green-300">here.</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      username: null,
      password: null,
      cpassword: null,
    };
  },
  methods: {
    handleRegister: function (e) {
      if (this.password != this.cpassword) {
        this.$router.push("/register");
      }
      var user = {
        name: this.name,
        username: this.username,
        password: this.password,
      };

      this.$store.dispatch("handleRegister", user);
      e.preventDefault();
    },
  },
  mounted() {
    if (this.$store.getters.getLoggedIn) {
      this.$router.push("/home");
    }
  },
};
</script>
