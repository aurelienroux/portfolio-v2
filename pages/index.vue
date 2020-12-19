<template>
  <div>
    <Title />
    <!-- <Jobs :jobs="jobs" /> -->
    <Projects :projects="projects" />
    <Contact />
  </div>
</template>

<script>
import Title from '@/components/Title'
// import Jobs from '@/components/Jobs'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default {
  name: 'IndexPage',
  components: {
    Title,
    // Jobs,
    Projects,
    Contact,
  },
  async asyncData({ $content }) {
    const { projects } = await $content('projects').fetch()
    const { jobs } = await $content('jobs').fetch()

    return { projects, jobs }
  },
}
</script>

<style></style>
