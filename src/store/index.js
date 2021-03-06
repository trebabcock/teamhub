import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");
//axios.defaults.baseURL = "http://fglteam.com/api/v1";
axios.defaults.baseURL = "http://localhost:2814";

Vue.use(Vuex);

//let user = this.$store.getters.getUser;
//let socket = new WebSocket("ws://fglteam.com/api/v1/chat");
let socket = new WebSocket("ws://localhost:2814/chat");
console.log("Attempting Connection...");

socket.onopen = () => {
  //socket.send(store.getters.getUser.id);
};

socket.onclose = (event) => {
  console.log("Socket Closed Connection: ", event);
  //socket = new WebSocket("ws://fglteam.com/api/v1/chat");
  socket = new WebSocket("ws://localhost:2814/chat");
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
    currentChannel: {},
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
    getCurrentChannel: (state) => {
      return state.currentChannel;
    },
    getUsers: (state) => {
      return state.users;
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
    setUsers(state, users) {
      state.users = users;
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
    setCurrentChannel(state, channel) {
      state.currentChannel = channel;
    },
    removeChannel(state, id) {
      state.channels = state.channels.filter((channel) => channel.uuid != id);
    },
    removePost(state, id) {
      state.posts = state.posts.filter((posts) => posts.id != id);
    },
    editMessage(state, id, newMessage) {
      let msg = [...state.messages].filter((message) => message.id === id)[0];
      let index = state.messages.indexOf(msg);
      state.messages[index] = newMessage;
    },
    editPost(state, id, newPost) {
      let pst = [...state.posts].filter((post) => post.id === id)[0];
      let index = state.posts.indexOf(pst);
      state.posts[index] = newPost;
    },
    deleteMessage(state, id) {
      state.messages = state.messages.filter((message) => message.id != id);
    },
    deletePost(state, id) {
      state.posts = state.posts.filter((post) => post.id != id);
    },
  },
  actions: {
    sendMessage(context, payload) {
      /*let packet = {
        sender_id: store.getters.getUser.uuid,
        private: payload.private,
        type: "action",
        data: {
          action: "new_message",
          message: payload,
        },
      };*/

      socket.send(JSON.stringify(payload));
    },
    editMessage(context, payload) {
      let packet = {
        sender_id: store.getters.getUser.uuid,
        private: payload.private,
        type: "action",
        data: {
          action: "edit_message",
          message: payload,
        },
      };

      socket.send(JSON.stringify(packet));
    },
    deleteMessage(context, payload) {
      let packet = {
        sender_id: store.getters.getUser.uuid,
        private: payload.private,
        type: "action",
        data: {
          action: "delete_message",
          message: payload,
        },
      };

      socket.send(JSON.stringify(packet));
    },
    fetchMessages({ commit }) {
      axios
        .get("/api/v1/chat/messages", {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          commit("setMessages", response.data);
        });
    },
    fetchPosts({ commit }) {
      axios
        .get("/api/v1/posts", {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          commit("setPosts", response.data);
        });
    },
    fetchChannels({ commit }) {
      axios
        .get("/api/v1/chat/channels", {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          commit("setChannels", response.data);
        });
    },
    fetchUsers({ commit }) {
      axios
        .get("/api/v1/users", {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          commit("setUsers", response.data);
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
          commit("setAccessToken", response.data.access_token);
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
      axios
        .post("/api/v1/posts/create", post, {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          console.log(response);
        });

      let packet = {
        sender_id: store.getters.getUser.uuid,
        private: false,
        type: "action",
        data: {
          action: "create_post",
          post: post,
        },
      };

      socket.send(JSON.stringify(packet));
    },
    createChannel(context, channel) {
      axios
        .post("/api/v1/chat/channels/new", channel, {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          console.log(response);
        });

      let packet = {
        sender_id: store.getters.getUser.uuid,
        private: false,
        type: "action",
        data: {
          action: "create_channel",
          channel: channel,
        },
      };

      socket.send(JSON.stringify(packet));
    },
    deleteChannel(context, channel) {
      axios
        .delete("/api/v1/chat/channels/" + channel.uuid, {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          console.log(response);
        });

      let packet = {
        sender_id: store.getters.getUser.uuid,
        private: false,
        type: "action",
        data: {
          action: "delete_channel",
          channel: channel,
        },
      };

      socket.send(JSON.stringify(packet));
    },
    deletePost(context, id) {
      axios
        .delete("/api/v1/posts/" + id, {
          headers: { Authorization: "Bearer " + store.getters.getAccessToken },
        })
        .then((response) => {
          console.log(response);
        });

      let packet = {
        sender_id: store.getters.getUser.uuid,
        private: false,
        type: "action",
        data: {
          action: "delete_post",
          post: id,
        },
      };

      socket.send(JSON.stringify(packet));
    },
  },
  modules: {},
});

export default store;
