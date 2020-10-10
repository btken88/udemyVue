const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      toggle: "",
      backgroundInput: "",
    };
  },
  methods: {
    changeStyle() {
      this.toggle === "user1"
        ? (this.toggle = "user2")
        : (this.toggle = "user1");
    },
  },
});

app.mount("#assignment");
