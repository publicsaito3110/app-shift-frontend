<template>
</template>

<script>
import axios from 'axios';
import constant from '@/common/constant'

export default {
  created() {
    this.$store.dispatch('removeToken')
    this.$router.push({ path: '/login' })
  },
  methods: {
    apiUser() {
      axios.post(constant.BE_API_URL + '/api/user', {
        id: this.id
      })
        .then(res => {
          console.log(res.data)
          this.$router.push({ 
            path: '/user',
            params: { res: res.data.userList[0].id }
          });
        }).catch(err => { throw err })
    }

  }
}
</script>
