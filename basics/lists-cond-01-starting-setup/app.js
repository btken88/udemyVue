const app = Vue.createApp({
  data() {
    return { goals: [], userGoalValue: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
