<template>
  <div class="border-b border-gray-100 py-3 flex items-start mb-4 text-sm">
    <!--<img
      src="https://github.com/identicons/jasonlong.png"
      class="cursor-pointer w-10 h-10 rounded-3xl mr-3"
    />-->
    <img
      src="https://github.com/identicons/jasonlong.png"
      class="cursor-pointer w-10 h-10 mr-3"
    />
    <div class="flex-1 overflow-hidden">
      <div>
        <span
          class="mr-2 font-bold text-green-600 cursor-pointer hover:underline"
          >{{ author }}</span
        >
        <span class="text-gray-400 text-xs">Today, at 11:55 AM</span>
      </div>
      <p class="leading-normal">
        {{ content }}
      </p>
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
  },
};
</script>
