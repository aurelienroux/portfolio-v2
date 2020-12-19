<template>
  <div class="projects">
    <h2>What I have built</h2>

    <div class="display">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <h3 class="project__title">
          {{ project.title }}
        </h3>
        <p class="project__desc">
          {{ project.description }}
        </p>
        {{ project.github }}
        {{ project.liveDemo }}
        <div class="project__techs">
          <div
            v-for="(tech, techIndex) in project.techs"
            :key="techIndex"
            class="project__tech"
          >
            {{ tech }}
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
.projects {
  border: 1px solid;
  min-height: 100vh;

  h2 {
    font-family: $font-montserrat;
    font-size: 4rem;
    margin: 0 0 4rem 0;
  }

  .display {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  .project {
    background: darken($color: $color-bg, $amount: 5);
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    line-height: 1.4;
    padding: 2.5rem;

    &__title {
      font-family: $font-montserrat;
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    &__desc {
      flex: 1;
      margin-bottom: 1rem;
    }

    &__techs {
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
    }

    &__tech {
      border: 0.1rem solid;
      font-size: 1.2rem;
      margin: 0 1rem 1rem 0;
      padding: 0.5rem 1.5rem;
    }
  }
}
</style>
