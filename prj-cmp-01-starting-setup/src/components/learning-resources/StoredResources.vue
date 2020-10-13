<template>
  <ul>
    <LearningResource
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  props: ['stored-resources'],
  components: { LearningResource }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
