const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value !== "") {
    //     this.fullName = `${value} Kennedy`;
    //   }
    // },
  },
  computed: {
    fullName() {
      if (this.name === "") return "";
      return `${this.name} Kennedy`;
    },
  },
  methods: {
    outputFullName() {
      return this.name === "" ? "" : `${name} Kennedy`;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
