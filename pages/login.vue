<!-- 未リファクタリング -->

<template>
  <v-app>
    <v-app-bar color="primary" class="elevationyarn add vuejs-datepicker-0" outlined dark app>
      <v-toolbar-title class="font-weight-thin display-1" style="font-size: 25px !important;">ムキム記録</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="display_pc">
        <v-btn to="/signUp" class="font-weight-thin title" text>新規登録へ</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <div style="margin-top: 50px"></div>

    <v-card width="600px" class="elevation-0 pa-3 login-card mx-auto content">
      <v-card-text>
        <h1
          style="text-align: center; font-weight: 400; color: rgba(26, 118, 210, 100); margin: 20px 0; font-size: 35px;"
        >Sign in</h1>
        <v-form ref="loginForm" style="margin-top: 30px;">
          <v-text-field
            append-icon="mdi-account"
            name="name"
            label="名前またはメールアドレス"
            type="text"
            :rules="nameRules"
            v-model="sign_in_text"
            required
          ></v-text-field>
          <v-text-field
            append-icon="mdi-key"
            name="password"
            label="パスワード"
            id="password"
            type="password"
            v-model.lazy="password"
            :rules="passwordRules"
            required
          ></v-text-field>
          <div @click="loginUser">
            <long-button>ログイン</long-button>
          </div>
          <div style="text-align: center; margin-top: 35px;">
            <a href="/signUp">>新規登録はこちら</a>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>


<script>
import axios from "~/plugins/axios.js";
import LongButton from "~/components/atom/LongButton";
export default {
  layout: "start",
  data() {
    return {
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
      sign_in_text: "",
      password: ""
    };
  },
  components: {
    LongButton
  },

  methods: {
    loginUser() {
      axios
        .post("sign_in", {
          headers: {
            "Content-Type": "application/json"
          },
          sign_in_params: {
            sign_in_text: this.sign_in_text,
            password: this.password
          }
        })
        .then(response => response.data)
        .then(json => {
          alert("ログインしました");
          const obj = {
            id: json.id,
            token: json.token
          };

          this.$cookies.set("login_cookie", obj, {
            path: "/home",
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


<style >
.display_sm {
  display: none;
}

.delete-underline {
  text-decoration: none;
}

.margin_1 {
  margin-top: 20px;
}

@media screen and (max-width: 560px) {
  .display_sm {
    display: block;
  }

  .display_pc {
    display: none;
  }
}
</style>