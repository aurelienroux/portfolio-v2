<template>
  <div class="jobs">
    <h2>jobs</h2>
    <ul>
      <div v-for="(job, index) in jobs" :key="index">
        {{ job.companyName }}
        {{ job.dateBegin }}
        {{ job.dateEnd }}
        {{ job.location }}
        <hr />
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    jobs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.jobs {
  border: 0.1rem solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8rem;
  min-height: 100vh;
}
</style>
