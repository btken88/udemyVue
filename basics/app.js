const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Understand Vue.js vs React",
      courseGoalB: "Build awesome apps with Vue.js!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
