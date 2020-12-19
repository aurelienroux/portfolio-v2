<template>
  <div>
    <Title />
    <Jobs />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Jobs from '@/components/Jobs'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default {
  name: 'IndexPage',
  components: {
    Title,
    Jobs,
    Projects,
    Contact,
  },
}
</script>

<style></style>
