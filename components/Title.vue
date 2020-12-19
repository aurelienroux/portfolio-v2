<template>
  <div class="title">
    <p>Hello, I'm</p>
    <h1>Aurelien Roux</h1>
    <h2>Front end & aspiring fullstack developer</h2>
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
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  h1,
  h2 {
    font-family: $font-montserrat;
  }

  h1 {
    font-size: 8rem;
    margin: 0 0 2rem 0;
  }

  h2 {
    font-size: 4rem;
    margin: 0 0 4rem 0;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.5;
    max-width: 50rem;
  }
}
</style>
