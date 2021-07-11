<template>
  <div class="bg-gray-700 min-h-screen flex justify-center items-center">
    <div class="w-72 bg-gray-600 rounded-lg p-8 flex flex-col">
      <h2
        class="text-green-300 text-3xl text-center font-medium title-font mb-5"
      >
        Create Channel
      </h2>
      <form id="channel" @submit="createChannel">
        <input
          type="text"
          v-model="name"
          id="name"
          name="name"
          placeholder="Channel Name"
          class="mt-2 w-full bg-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-200 py-1 px-3"
        />
        <textarea
          v-model="description"
          id="description"
          name="description"
          placeholder="Channel Description"
          class="mt-2 w-full bg-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-200 py-1 px-3"
        />
        <input
          type="submit"
          id="submit"
          name="submit"
          value="Create"
          class="cursor-pointer mt-2 w-full rounded-lg text-base outline-none text-green-300 bg-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    createChannel: function (e) {
      var channel = {
        name: this.name,
        description: this.description,
        id: uuidv4(),
      };

      this.$store.dispatch("createChannel", channel);
      this.$store.dispatch("fetchChannels");
      e.preventDefault();
      //this.$router.go();
      this.$router.push("/chat/" + this.name);
    },
  },
};
</script>
