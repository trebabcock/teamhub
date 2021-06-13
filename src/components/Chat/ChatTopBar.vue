<template>
  <div
    class="border-b border-gray-800 bg-gray-800 flex px-6 py-2 items-center flex-none"
  >
    <div class="flex flex-col">
      <h3 class="text-green-200 mb-1 font-extrabold">{{ channel }}</h3>
      <!--<div class="text-grey-dark text-sm truncate">{{ description }}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    channel: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
