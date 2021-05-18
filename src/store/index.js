import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let socket = new WebSocket("ws://192.168.40.13:2814/api/v1/chat");
console.log("Attempting Connection...");

socket.onopen = () => {
  //console.log("Successfully Connected");
  socket.send("Hi From the Client!");
};

socket.onclose = (event) => {
  console.log("Socket Closed Connection: ", event);
  socket.send("Client Closed!");
};

socket.onerror = (error) => {
  console.log("Socket Error: ", error);
};

socket.onmessage = (message) => {
  console.log(message.data);
  store.commit("addMessage", JSON.parse(message.data));
};

const store = new Vuex.Store({
  state: {
    messages: [
      {
        author: "Tre (LM-003)",
        destination: "General",
        type: "message",
        content: "test message",
      },
      {
        author: "Tre (LM-003)",
        destination: "General",
        type: "message",
        content: "another test message",
      },
    ],
  },
  getters: {
    getMessages: (state) => state.messages,
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
  },
  actions: {
    sendMessage(context, payload) {
      var message = {
        author: "Tre (LM-003)",
        destination: "General",
        type: "message",
        content: payload,
      };
      socket.send(JSON.stringify(message));
    },
  },
  modules: {},
});

export default store;
