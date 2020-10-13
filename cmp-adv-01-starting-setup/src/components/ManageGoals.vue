<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <h2>Input is Invalid!</h2>
        <p>Please enter some text</p>
        <button @click="removeError">Okay</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: { ErrorAlert },
  data() {
    return { inputIsInvalid: false };
  },
  methods: {
    setGoal() {
      let enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    removeError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
