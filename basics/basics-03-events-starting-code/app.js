const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    increment(number) {
      this.counter += number;
    },
    decrement(number) {
      this.counter -= number;
    },
    updateName(event) {
      this.name = event.target.value;
    },
    confirmName(event) {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
