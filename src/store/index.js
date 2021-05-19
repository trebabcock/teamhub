import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");

Vue.use(Vuex);

let socket = new WebSocket("ws://192.168.40.13:2814/api/v1/chat");
console.log("Attempting Connection...");

socket.onopen = () => {
  //socket.send("Hi From the Client!");
};

socket.onclose = (event) => {
  console.log("Socket Closed Connection: ", event);
  socket = new WebSocket("ws://192.168.40.13:2814/api/v1/chat");
};

socket.onerror = (error) => {
  console.log("Socket Error: ", error);
};

socket.onmessage = (message) => {
  store.commit("addMessage", JSON.parse(message.data));
};

const store = new Vuex.Store({
  state: {
    messages: [],
  },
  getters: {
    getMessages: (state) => state.messages,
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
    setMessages(state, payload) {
      state.messages = payload;
    },
  },
  actions: {
    sendMessage(context, payload) {
      try {
        socket.send(JSON.stringify(payload));
      } catch (error) {
        console.error(error);
      }
    },
    fetchMessages({ commit }) {
      axios
        .get("http://192.168.40.13:2814/api/v1/chat/messages")
        .then((response) => {
          commit("setMessages", response.data);
        });
    },
  },
  modules: {},
});

export default store;
