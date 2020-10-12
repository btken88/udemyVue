<template>
  <section>
    <h1>User Assignment</h1>
    <ActiveUser :username="username" :age="age" />
    <UserData @update-user="updateUser" />
  </section>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      username: "Test Name",
      age: "10000000000000000",
    };
  },
  methods: {
    updateUser(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
