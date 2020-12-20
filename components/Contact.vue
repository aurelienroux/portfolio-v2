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
        <font-awesome-icon :icon="['fab', 'github']" size="6x" />
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
    font-family: $font-montserrat;
    font-size: 4rem;
    margin: 0 0 14rem 0;
    text-align: center;
  }

  &__links {
    display: flex;
    justify-content: space-around;
  }

  &__link {
    padding: 2rem;
  }
}
</style>
