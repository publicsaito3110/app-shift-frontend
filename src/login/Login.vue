<script setup>
import axios from 'axios'
import constant from '@/common/constant'
</script>

<template>
  <div class="container">
    <h3 class="profile-title">ログイン</h3>
    <span>id</span>
    <input v-model="id" type="text" class="form-control" placeholder="User ID" required autofocus />
    <span>password</span>
    <input v-model="password" type="password" class="form-control" placeholder="Password" required />
    <button @click="apiLogin" class="btn btn-lg btn-primary btn-block btn-signin" type="submit">ログイン</button>
  </div>
</template>

<script>
export default {
  methods: {
    apiLogin() {
      axios.post(constant.BE_API_URL + '/api/login', {
        id: this.id,
        password: this.password
      })
        .then(res => {
          // ヘッダーから取得したトークンをストアに保存
          this.$store.dispatch('saveToken', res.headers['x-auth-token'])
          this.$router.push({ path: '/home' })
          console.log(res)
        }).catch(err => { 
          alert("ログインに失敗しました")
          throw err 
        })
    }
  }
}
</script>