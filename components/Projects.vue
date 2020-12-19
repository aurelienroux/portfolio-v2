<template>
  <div>
    projects

    <div v-for="(project, index) in projects" :key="index">
      {{ project.title }}
      {{ project.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
