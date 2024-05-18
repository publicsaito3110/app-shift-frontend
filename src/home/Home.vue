<template>
  <div>
    <h1>ようこそ {{ res.id }} {{ res.name }} さん！！</h1>
    <div>
      <h3>ユーザ検索</h3>
      <input v-model="id" type="text" class="form-control" placeholder="検索したいユーザのIDを入力してください" />
      <button @click="apiUser" class="btn btn-lg btn-primary btn-block btn-signin" type="submit">検索</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import constant from '@/common/constant'

export default {
  data() {
    return {
      res: [],
      err: []
    }
  },
  created() {
    axios.get(constant.BE_API_URL + '/api/home',{
            headers: {
                "X-AUTH-TOKEN" : "Bearer " + this.$store.getters.getToken
            }
        })
      .then(response => {
        // JSON responses are automatically parsed.
        this.res = response.data
      })
      .catch(e => {
        this.err.push(e)
      })
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
