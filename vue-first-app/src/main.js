import { createApp } from "vue";
import App from "./App.vue";
import FriendCard from "./components/FriendCard.vue";
const app = createApp(App);

app.component("friend-contact", FriendCard);

app.mount("#app");
