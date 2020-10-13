<template>
  <form @submit.prevent="submitForm">
    <label for="username">Username</label>
    <input type="text" name="username" v-model="username" />
    <label for="age">Age</label>
    <input type="text" name="age" v-model="age" />
    <button type="submit">Update</button>
  </form>
</template>

<script>
export default {
  emits: ["update-user"],
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("update-user", this.username, this.age);
    },
  },
};
</script>

<style></style>
