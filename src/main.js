import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faComments, faCommentAlt, faHdd, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog, faComments, faCommentAlt, faHdd, faHome, faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.dispatch("initStore");
  },
}).$mount("#app");
