<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background: $color-bg;
  box-sizing: border-box;
  color: $color-text;
  font-family: $font-lato;
  font-size: 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  border: 1px solid;
  margin: 0 auto;
  max-width: 110rem;
  padding: 0 5rem;
}

a {
  color: $color-orange;
  text-decoration: none;
}
</style>
