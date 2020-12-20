<template>
  <div>
    <Hero />
    <!-- <Jobs :jobs="jobs" /> -->
    <Projects :projects="projects" />
    <Contact />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
// import Jobs from '@/components/Jobs'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default {
  name: 'IndexPage',
  components: {
    Hero,
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
