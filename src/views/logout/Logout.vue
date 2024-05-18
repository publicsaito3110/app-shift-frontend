<template>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('removeToken')
    this.$router.push({ path: '/login' })
  },
}
</script>
