const app = Vue.createApp({
  data() {
    return {
      taskInput = "",
      tasks = ["First one"],
      showList = false,
    };
  },
  methods: {
    addTask() {
      console.log('add')
      alert('add')
      this.tasks.push(this.taskInput)
    },
    toggleList() {
      this.showList = !this.showList
    }
  },
  computed: {
    hideShowValue() {
      return showList ? "Hide" : "Show"
    }
  }
});

app.mount("#assignment");


