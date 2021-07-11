<template>
  <div
    class="my-2 py-3 flex flex-col text-green-50 rounded-md px-2 bg-gray-700 hover:shadow-md bg-transparent dark:border-gray-800 items-start mb-1 text-sm"
  >
    <div
      class="flex flex-row items-center border-b pb-2 border-gray-800 w-full"
    >
      <img
        src="https://i.stack.imgur.com/frlIf.png"
        class="cursor-pointer w-10 h-10 mr-3 rounded-3xl"
      />
      <div class="flex-1 overflow-hidden">
        <div class="mb-2">
          <span
            class="mr-2 font-bold text-green-300 cursor-pointer hover:underline"
            >{{ author }}</span
          >
          <span class="text-gray-400 text-xs">{{ time }}</span>
        </div>
      </div>
    </div>
    <div class="py-4 px-2">
      <p class="leading-normal">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>
