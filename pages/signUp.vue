<template>
  <v-app>
    <v-app-bar color="primary" class="elevationyarn add vuejs-datepicker-0" outlined dark app>
      <v-toolbar-title
        class="font-weight-thin display-1"
        style="font-size: 25px !important; width: 100%; text-align: center;"
      >ムキム記録</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="display_pc">
        <v-btn class="font-weight-thin title" to="/login" text>ログインへ</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <div style="margin-top: 50px"></div>

    <v-card width="600px" class="elevation-0 pa-3 login-card mx-auto">
      <v-card-text>
        <!-- <div class="layout column align-center">
          <h1 class="font-size: 35px; font-weight: 100px;">Sign up</h1>
        </div> -->
        <h1 style="text-align: center; font-weight: 400; color: rgba(26, 118, 210, 100); margin: 20px 0; font-size: 35px;">
          Sign up
        </h1>
        <v-form ref="loginForm">
          <v-text-field
            append-icon="mdi-account"
            name="name"
            label="名前"
            type="text"
            :counter="12"
            :rules="nameRules"
            v-model="model.name"
            required
          ></v-text-field>
          <v-text-field
            append-icon="mdi-email-outline"
            name="login"
            label="メールアドレス"
            type="text"
            v-model="model.email"
            :counter="50"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            append-icon="mdi-key"
            name="password"
            label="パスワード"
            id="password"
            type="password"
            v-model.lazy="model.password"
            :rules="passwordRules"
            required
          ></v-text-field>
          <v-text-field
            append-icon="mdi-key"
            name="password_confirmation"
            label="パスワード再入力"
            id="password_confirmation"
            type="password"
            v-model="model.password_confirmation"
            :rules="passwordRules"
            required
          ></v-text-field>

          <div @click="createUser">
            <long-button>新規登録</long-button> 
          </div>
          <div style="text-align: center; margin-top: 35px;">
            <a href="/login"> >アカウントをお持ちですか？</a>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>


<script>
import axios from "~/plugins/axios.js";
import LongButton from "~/components/atom/LongButton"
export default {
  layout: "start",
  data: () => ({
    loading: false,
    nameRules: [v => !!v || "必須項目です"],
    emailRules: [
      v => !!v || "必須項目です。",
      v =>
        (v && v.length <= 50) ||
        "メールアドレスは50文字以内で入力してください。",
      v =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "メールアドレスの形式がまだ正しくありません。"
    ],
    passwordRules: [v => !!v || "必須項目です。"],
    model: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      radios: "false"
    }
  }),

  components: {
    LongButton,
  },

  methods: {
    createUser() {
      axios
        .post("sign_up", {
          headers: {
            "Content-Type": "application/json"
          },
          sign_up_params: {
            name: this.model.name,
            email: this.model.email,
            password: this.model.password,
            password_confirmation: this.model.password_confirmation,
            user_private: this.model.radios
          }
        })
        .then(response => response.data)
        .then(json => {
          alert("ユーザーを作成しました");
          const obj = {
            id: json.id,
            token: json.token
          };
          console.log(obj);
          // Cookieの部分色々つける。
          this.$cookies.set("login_cookie", obj, {
            path: "/",
            maxAge: 60 * 60 * 24 * 7
          });
          this.$router.push("/home");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>


<style>
.display_sm {
  display: none;
}

.delete-underline {
  text-decoration: none;
}

.content {
}

@media screen and (max-width: 480px) {
  .display_sm {
    display: block;
  }

  .display_pc {
    display: none;
  }
}
</style>