const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{this.friend.name}}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul>
            <li><strong>Phone:</strong> {{this.friend.phone}}</li>
            <li><strong>Email:</strong> {{this.friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return { detailsAreVisible: false };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
