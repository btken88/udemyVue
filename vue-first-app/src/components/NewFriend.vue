<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" name="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" />
    </div>
    <button type="submit">Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-form"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit-form", this.name, this.phone, this.email);
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style></style>
