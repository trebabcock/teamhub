import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");
axios.defaults.baseURL = "http://localhost:2814/api/v1";

Vue.use(Vuex);

let socket = new WebSocket("ws://localhost:2814/api/v1/chat");
console.log("Attempting Connection...");

socket.onopen = () => {
  //socket.send("Hi From the Client!");
};

socket.onclose = (event) => {
  console.log("Socket Closed Connection: ", event);
  socket = new WebSocket("ws://localhost:2814/api/v1/chat");
};

socket.onerror = (error) => {
  console.log("Socket Error: ", error);
};

socket.onmessage = (message) => {
  store.commit("addMessage", JSON.parse(message.data));
};

const store = new Vuex.Store({
  state: {
    loggedIn: false,
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
    getChannel: (state) => (name) => {
      return state.channels.filter((channel) => channel.name === name);
    },
    getTheme: (state) => state.theme,
    getUser: (state) => state.user,
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getLoggedIn: (state) => state.loggedIn,
    getPosts: (state) => {
      return state.posts.reverse();
    },
    getChannels: (state) => {
      return state.channels;
    },
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
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setRefreshToken(state, token) {
      state.refreshToken = token;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setChannels(state, channels) {
      state.channels = channels;
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
      axios.get("/chat/messages").then((response) => {
        commit("setMessages", response.data);
      });
    },
    fetchPosts({ commit }) {
      axios.get("/posts").then((response) => {
        commit("setPosts", response.data);
      });
    },
    fetchChannels({ commit }) {
      axios.get("/chat/channels").then((response) => {
        commit("setChannels", response.data);
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
    initStore({ commit }) {
      if (localStorage.getItem("user")) {
        commit("setUser", localStorage.getItem("user"));
      }
      if (localStorage.getItem("loggedIn")) {
        commit("setLoggedIn", true);
      }
    },
    handleLogin({ commit }, credentials) {
      axios.post("/auth/login", credentials).then((response) => {
        if (response.status === 200) {
          commit("setUser", response.data);
          commit("setLoggedIn", true);
          localStorage.setItem("user", response.data);
          localStorage.setItem("loggedIn", true);
          this.$router.push("/home");
        }
      });
    },
    handleRegister(context, credentials) {
      axios.post("/auth/register", credentials).then((response) => {
        console.log(response);
      });
    },
    sendPost(context, post) {
      axios.post("/posts/create", post).then((response) => {
        console.log(response);
      });
    },
    createChannel(context, channel) {
      axios.post("/chat/channels/new", channel).then((response) => {
        console.log(response);
      });
    },
    deleteChannel(context, channel) {
      axios.delete("/chat/channels/" + channel.id).then((response) => {
        console.log(response);
      });
    },
  },
  modules: {},
});

export default store;
