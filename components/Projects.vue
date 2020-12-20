<template>
  <div class="projects">
    <h2 class="projects__title">What I have built</h2>

    <div class="display">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <h3 class="project__title">
          {{ project.title }}
        </h3>

        <div v-if="project.github || project.liveDemo" class="project__links">
          <a
            v-if="project.github"
            class="project__link"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon icon="code" fixed-width />
          </a>
          <a
            v-if="project.liveDemo"
            class="project__link"
            :href="project.liveDemo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon icon="link" fixed-width />
          </a>
        </div>

        <p class="project__desc">
          {{ project.description }}
        </p>

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
  min-height: 100vh;

  &__title {
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

    &__links {
      display: flex;
      margin-bottom: 1rem;
    }

    &__link {
      border-radius: 100%;
      border: 0.1rem solid;
      color: $color-text;
      margin-right: 2rem;
      padding: 1rem;
      transition: 0.3s;

      &:hover {
        color: $color-orange;
        transition: 0.3s;
      }
    }

    &__desc {
      flex: 1;
      margin-bottom: 2rem;
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
