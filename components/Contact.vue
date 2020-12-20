<template>
  <div class="contact">
    <h2 class="contact__title">Say hi!</h2>
    <div class="contact__links">
      <a href="mailto:aureroux13@gmail.com" class="contact__link">
        <font-awesome-icon icon="envelope" size="6x" />
      </a>
      <a
        href="https://www.linkedin.com/in/rouxaurelien/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact__link"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" size="6x" />
      </a>
      <a
        href="https://github.com/aurelienroux"
        target="_blank"
        rel="noopener noreferrer"
        class="contact__link"
      >
        <font-awesome-icon :icon="['fab', 'github-alt']" size="6x" />
      </a>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  &__title {
    color: $color-orange;
    font-family: $font-montserrat;
    font-size: 3rem;
    margin: 0 0 6rem 0;
    text-align: center;

    @include for-tablet-portrait-up {
      font-size: 4rem;
      margin: 0 0 14rem 0;
    }
  }

  &__links {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @include for-tablet-portrait-up {
      flex-direction: row;
    }
  }

  &__link {
    color: $color-text;
    margin: 2rem;
    padding: 2rem;
    transition: 0.3s;

    &:hover {
      color: $color-orange;
      transition: 0.3s;
    }
  }
}
</style>
