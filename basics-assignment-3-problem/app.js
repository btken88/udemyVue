const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add(number) {
      this.count += number;
    },
  },
  computed: {
    result() {
      if (this.count < 37) return "Not there yet";
      else if (this.count === 37) return this.count;
      else return "Too much!";
    },
  },
  watch: {
    count() {
      let that = this;
      setTimeout(() => (that.count = 0), 5000);
    },
  },
});

app.mount("#assignment");
