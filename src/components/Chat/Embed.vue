<template>
  <div>
    <a :href="url" class="text-green-400">{{ url }}</a>
    <div class="bg-gray-800 p-4 mt-2 h-44 w-10/12 flex flex-row rounded-lg">
      <img
        class="bg-gray-600 rounded-lg min-h-full w-36"
        src="https://avatars.githubusercontent.com/u/8203966?s=400&u=b1ea724ca0c592b96893591b6573728ad5d4d485&v=4.png"
      />
      <div class="px-4 py-2 flex flex-col">
        <p class="text-gray-400">GitHub</p>
        <a href="#" class="text-green-400 text-lg">trebabcock/teamhub</a>
        <p class="break-words overflow-hidden text-gray-400">
          A place for teams to collaborate and share ideas.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
