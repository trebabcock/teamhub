import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");

//axios.defaults.baseURL = "http://192.168.40.13:2814";
//axios.defaults.headers.common["Authorization"] = "Bearer ";

Vue.use(Vuex);

let socket = new WebSocket("ws://192.168.1.71:2814/api/v1/chat");
console.log("Attempting Connection...");

socket.onopen = () => {
  //socket.send("Hi From the Client!");
};

socket.onclose = (event) => {
  console.log("Socket Closed Connection: ", event);
  socket = new WebSocket("ws://192.168.1.71:2814/api/v1/chat");
};

socket.onerror = (error) => {
  console.log("Socket Error: ", error);
};

socket.onmessage = (message) => {
  store.commit("addMessage", JSON.parse(message.data));
};

const store = new Vuex.Store({
  state: {
    loggedIn: Boolean,
    user: {},
    accessToken: "",
    refreshToken: "",
    messages: [],
    theme: {},
    users: [],
    channels: [],
    posts: [],
  },
  getters: {
    getMessages: (state) => (destination) => {
      return state.messages.filter(
        (message) => message.destination === destination
      );
    },
    getTheme: (state) => state.theme,
    getUser: (state) => state.user,
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
    setMessages(state, payload) {
      state.messages = payload;
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.theme = theme;
    },
    setUser(state, user) {
      state.user = user;
    },
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setRefreshToken(state, token) {
      state.refreshToken = token;
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
        .get("http://localhost:2814/api/v1/chat/messages")
        .then((response) => {
          commit("setMessages", response.data);
        });
    },
    initTheme({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;

      if (cachedTheme) commit("SET_THEME", cachedTheme);
      else if (userPrefersDark) commit("SET_THEME", "dark");
      else commit("SET_THEME", "light");
    },
    handleLogin({ commit }, credentials) {
      axios
        .post("http://localhost:2814/api/auth/login", credentials)
        .then((response) => {
          if (response.status === 200) {
            commit("setUser", response.data);
          }
          return response.status;
        });
    },
    handleRegister(context, credentials) {
      axios
        .post("http://localhost:2814/api/auth/register", credentials)
        .then((response) => {
          return response.status;
        });
    },
  },
  modules: {},
  toggleTheme({ commit }) {
    switch (localStorage.theme) {
      case "light":
        commit("SET_THEME", "dark");
        break;

      default:
        commit("SET_THEME", "light");
        break;
    }
  },
});

export default store;
