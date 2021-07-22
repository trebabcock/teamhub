import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");
axios.defaults.baseURL = "http://localhost:2814/api/v1";

Vue.use(Vuex);

//let user = this.$store.getters.getUser;
let socket = new WebSocket("ws://localhost:2814/api/v1/chat?id=" + "asdf");
console.log("Attempting Connection...");

socket.onopen = () => {
  //socket.send(store.getters.getUser.id);
};

socket.onclose = (event) => {
  console.log("Socket Closed Connection: ", event);
  socket = new WebSocket("ws://localhost:2814/api/v1/chat?id=" + "asdf");
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
        (message) => message.destination_id === destination
      );
    },
    getChannel: (state) => (id) => {
      return state.channels.filter((channel) => channel.uuid === id);
    },
    getTheme: (state) => state.theme,
    getUser: (state) => state.user,
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getLoggedIn: (state) => state.loggedIn,
    getPosts: (state) => {
      return [...state.posts].reverse();
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
    addPost(state, post) {
      state.posts.push(post);
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
    addChannel(state, channel) {
      state.channels.push(channel);
    },
    removeChannel(state, id) {
      state.channels = state.channels.filter((channel) => channel.uuid != id);
    },
    removePost(state, id) {
      state.posts = state.posts.filter((posts) => posts.id != id);
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
    initStore() {
      if (localStorage.getItem("user")) {
        store.dispatch("handleLogin", {
          username: localStorage.username,
          password: localStorage.password,
        });
      } else {
        this.$router.push("/register");
      }
    },
    handleLogin({ commit }, credentials) {
      axios.post("/auth/login", credentials).then((response) => {
        if (response.status === 200) {
          commit("setUser", response.data);
          commit("setLoggedIn", true);
          localStorage.username = response.data.username;
          localStorage.password = response.data.password;
          this.$router.push("/");
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
      axios.delete("/chat/channels/" + channel.uuid).then((response) => {
        console.log(response);
      });
    },
    deletePost(context, id) {
      axios.delete("/posts/" + id).then((response) => {
        console.log(response);
      });
    }
  },
  modules: {},
});

export default store;
