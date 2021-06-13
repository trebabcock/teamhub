<template>
  <div
    id="messageList"
    class="bg-transparent px-6 py-4 flex-1 overflow-y-scroll no-scrollbar"
  >
    <ChatMessage
      v-for="message in messages"
      :key="message.id"
      v-bind:author="message.author"
      v-bind:content="message.content"
      v-bind:time="formatTime(message.time)"
      v-bind:messageType="message.type"
    />
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage";
const moment = require("moment");

function handleScroll() {
  var someElement = document.querySelector("#messageList"); // Create an observer and pass it a callback.
  var observer = new MutationObserver(scrollToBottom); // Tell it to look for new children that will change the height.
  var config = { childList: true };
  observer.observe(someElement, config);
  function animateScroll(duration) {
    var start = someElement.scrollTop;
    var end = someElement.scrollHeight;
    var change = end - start;
    var increment = 20;
    function easeInOut(currentTime, start, change, duration) {
      // by Robert Penner
      currentTime /= duration / 2;
      if (currentTime < 1) {
        return (change / 2) * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
    }
    function animate(elapsedTime) {
      elapsedTime += increment;
      var position = easeInOut(elapsedTime, start, change, duration);
      someElement.scrollTop = position;
      if (elapsedTime < duration) {
        setTimeout(function () {
          animate(elapsedTime);
        }, increment);
      }
    }
    animate(0);
  }
  // Here's our main callback function we passed to the observer
  function scrollToBottom() {
    var duration = 100; // Or however many milliseconds you want to scroll to last
    animateScroll(duration);
  }
}

export default {
  name: "ChatMessageList",
  props: {
    channel: {
      type: String,
      required: true,
    },
  },
  components: {
    ChatMessage,
  },
  methods: {
    formatTime(time) {
      return moment(time).calendar();
    },
  },
  computed: {
    messages() {
      return this.$store.getters.getMessages(this.channel);
    },
  },
  watch: {
    messages: () => {
      // Get a reference to the div you want to auto-scroll.
      handleScroll();
    },
  },
  mounted: function () {
    handleScroll();
  },
  beforeMount() {
    handleScroll();
  },
};
</script>
