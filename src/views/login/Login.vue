<script setup>
import axios from 'axios'
import constant from '@/common/constant'
</script>

<template>
  <div class="container">
		<div class="parents">
			<div class="card card-container">
				<h3 class="profile-title">ログイン</h3>
				<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
				<p id="profile-name" class="profile-name-card"></p>
				<div class="form-signin">
					<span id="reauth-email" class="reauth-email"></span>
					<input v-model="id" type="text" class="form-control" placeholder="ユーザID" required autofocus>
					<input v-model="password" type="password" class="form-control" placeholder="Password" required>
					<button @click="apiLogin" class="btn btn-lg btn-primary btn-block btn-signin">ログイン</button>
        </div>
				<p class="mb-1">
					<a href="#" class="forgot-password"> ユーザーIDをお忘れですか? </a>
				</p>
				<a href="#" class="forgot-password"> パスワードをお忘れですか? </a>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  data() {
    return {
      res: [],
      err: []
    }
  },

  created() {
    axios.get(constant.BE_API_URL + '/api/login',{
            headers: {
                "X-AUTH-TOKEN" : "Bearer " + this.$store.getters.getToken
            }
        })
      .then(response => {
        // JSON responses are automatically parsed.
        this.res = response.data

        // 既にログイン済みのとき、ホームへ遷移
        let isAlreadyLogin = this.res.alreadyLogin
        if (isAlreadyLogin) {
          this.$router.push({ path: '/home' })
        }
      })
      .catch(e => {
        this.err.push(e)
      })
  },

  methods: {
    apiLogin() {
      axios.post(constant.BE_API_URL + '/api/login/auth', {
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

<style lang="css" scoped>
body, html {
	height: 100%;
	background-repeat: no-repeat;
	background-image: url(/png/background/background1.jpg);
	background-size: cover;
}
.container {
	height: -webkit-fill-available;
}
.parents {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
  margin: 120px;
}
.profile-title {
	text-align: center;
	border-bottom: inset;
	margin-bottom: 20px;
	color: #656565;
}
.card-container.card {
	max-width: 350px;
	padding: 20px 40px 40px 40px;
	display: block;
	width: 50%;
	transform: scale(1.2,1.2);
}
.btn {
	font-weight: 700;
	height: 36px;
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none;
	cursor: default;
}
/*プロフィール*/
.card {
	background-color: #F7F7F7;
	margin: 0 auto 25px;
	-moz-border-radius: 2px;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0px 2px 2px rgb(0 0 0 / 30%);
	box-shadow: 0px 2px 2px rgb(0 0 0 / 30%);
}
.profile-img-card {
    width: 96px;
	height: 96px;
	margin: 0 auto 10px;
	display: block;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
}
/*フォーム*/
.profile-name-card {
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	margin: 10px 0 0;
	min-height: 1em;
}
.reauth-email {
	display: block;
	color: #404040;
	line-height: 2;
	margin-bottom: 10px;
	font-size: 14px;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
.form-signin #inputEmail, .form-signin #inputPassword {
	direction: ltr;
	height: 44px;
	font-size: 16px;
}
.form-signin input[type=text], .form-signin input[type=password], .form-signin input[type=text], .form-signin button {
	width: 100%;
	display: block;
	margin-bottom: 10px;
	z-index: 1;
	position: relative;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
.form-signin .form-control:focus {
	border-color: rgb(104, 145, 162);
	outline: 0;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
	box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
}
.btn.btn-signin {
	background-color: rgb(104, 145, 162);
	padding: 0px;
	font-weight: 700;
	font-size: 14px;
	height: 36px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
	border: none;
	-o-transition: all 0.218s;
	-moz-transition: all 0.218s;
	-webkit-transition: all 0.218s;
	transition: all 0.218s;
}
.btn.btn-signin:hover, .btn.btn-signin:active, .btn.btn-signin:focus {
	background-color: rgb(12, 97, 33);
}
.forgot-password {
	color: rgb(104, 145, 162);
}
.forgot-password:hover, .forgot-password:active, .forgot-password:focus{
	color: rgb(12, 97, 33);
}
</style>