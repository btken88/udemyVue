<template>
  <TheHeader title="Don't Forget It!" />
  <StoredResources :stored-resources="storedResources" />
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: { StoredResources, TheHeader },
  data() {
    return {
      storedResources: [
        {
          id: 'google',
          title: 'Google',
          description: 'You need to be able to google things!!!!',
          link: 'https://google.com'
        },
        {
          id: 'official-guide',
          title: 'Official Vue Guide',
          description: 'The official documentation for Vue.js',
          link: 'https://vuejs.org'
        }
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
