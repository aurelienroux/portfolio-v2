<template>
  <div class="hero">
    <p>Hello, I'm</p>
    <h1 class="hero__title">Aurelien Roux</h1>
    <h2 class="hero__subtitle">Front-end & aspiring fullstack developer</h2>
    <p>
      I specialize in Vue, Nuxt and am currently learning Node & Express. I
      believe in clean code,
      <a
        href="https://en.wikipedia.org/wiki/KISS_principle"
        target="_blank"
        rel="noopener noreferrer"
        >KISS</a
      >,
      <a
        href="https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it"
        target="_blank"
        rel="noopener noreferrer"
        >YAGNI</a
      >
      and
      <a
        href="https://en.wikipedia.org/wiki/Convention_over_configuration"
        target="_blank"
        rel="noopener noreferrer"
      >
        convention over configuration
      </a>
      principles
    </p>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-top: 2rem;

  &__title,
  &__subtitle {
    font-family: $font-montserrat;
  }

  &__title {
    color: $color-orange;
    font-size: 6rem;
    margin: 0 0 2rem 0;

    @include for-tablet-portrait-up {
      font-size: 8rem;
    }
  }

  &__subtitle {
    font-size: 3rem;
    margin: 0 0 4rem 0;

    @include for-tablet-portrait-up {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 1.5;
    max-width: 50rem;
  }
}
</style>
