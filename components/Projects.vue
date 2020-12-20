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
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            v-if="project.liveDemo"
            class="project__link"
            :href="project.liveDemo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
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
  padding-bottom: 2rem;

  &__title {
    color: $color-orange;
    font-family: $font-montserrat;
    font-size: 3rem;
    margin: 0 0 4rem 0;

    @include for-tablet-portrait-up {
      font-size: 4rem;
    }
  }

  .display {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));

    @include for-tablet-portrait-up {
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }
  }

  .project {
    background: darken($color: $color-bg, $amount: 5);
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    line-height: 1.4;
    padding: 2.5rem;

    &__title {
      color: $color-orange;
      font-family: $font-montserrat;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    &__links {
      display: flex;
      margin-bottom: 1rem;
    }

    &__link {
      color: $color-text;
      font-size: 2.2rem;
      left: -1.5rem;
      margin-right: 1rem;
      padding: 1.5rem;
      position: relative;
      transition: 0.3s;

      &:hover {
        color: $color-orange;
        transition: 0.3s;
      }

      &:first-of-type {
        font-size: 2.5rem;
        top: -0.2rem;
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
