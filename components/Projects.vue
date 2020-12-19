<template>
  <div>
    <h2>projects</h2>

    <div v-for="(project, index) in projects" :key="index">
      {{ project.title }}
      {{ project.description }}
      {{ project.github }}
      {{ project.liveDemo }}
      <div v-for="(tech, techIndex) in project.techs" :key="techIndex">
        {{ tech }}
      </div>
      <hr />
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
