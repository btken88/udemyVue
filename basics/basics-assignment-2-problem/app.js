const app = Vue.createApp({
  data() {
    return {
      keydownText: "",
      enterText: "",
    };
  },
  methods: {
    alert(event) {
      event.preventDefault();
      alert("You clicked the button!!!!!");
    },
    updateKeydown(event) {
      event.preventDefault();
      this.keydownText = event.target.value;
    },
    updateEnter(event) {
      event.preventDefault();
      this.enterText = event.target.value;
    },
  },
});

app.mount("#assignment");
