<template>
  <div class="lost">
    <div class="display">
      <h1 v-if="error.statusCode === 404" class="lost__title">
        You got lost...
      </h1>

      <h1 v-else class="lost__title">An error occurred...</h1>

      <font-awesome-icon :icon="['fas', 'ghost']" class="lost__icon" />

      <NuxtLink class="lost__link" to="/">Take me home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.lost {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  .display {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 50vh;
    padding: 2rem;
  }

  &__title {
    font-family: $font-montserrat;
    font-size: 6rem;
    margin: 0 0 4rem;
    text-align: center;
  }

  &__icon {
    color: $color-orange;
    font-size: 18rem;
    margin-bottom: 4rem;
  }

  &__link {
    font-family: $font-montserrat;
    font-size: 3rem;
  }
}
</style>
