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
        <a href="#" class="text-green-400 text-lg">trebabcock/fgl-backend</a>
        <p class="break-words overflow-hidden text-gray-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
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
