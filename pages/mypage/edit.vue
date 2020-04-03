<template>
  <v-app>
    <headerComponent>編集</headerComponent>
    
    <v-card width="600px" class="elevation-0 pa-3 login-card mx-auto content">
      <v-card-text>
        <div class="layout column align-center">
          <h1 class="flex my-4 primary--text font-weight-thin">ユーザー編集</h1>
        </div>
        <v-form ref="loginForm">
          <v-text-field
            append-icon="mdi-account"
            name="name"
            label="名前"
            type="text"
            :counter="12"
            :rules="nameRules"
            v-model="name"
            required
          ></v-text-field>
          <v-text-field
            append-icon="mdi-email-outline"
            name="login"
            label="メールアドレス"
            type="text"
            v-model="email"
            :counter="50"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-radio-group v-model="BooleanChange">
            <v-radio label="プロフィールを公開する" value="true"></v-radio>
            <v-radio label="プロフィールを公開しない" value="false"></v-radio>
          </v-radio-group>

          <v-layout>
            <v-spacer></v-spacer>
            <v-btn block right color="primary" @click="editUser">編集する</v-btn>
          </v-layout>
          <br />
          <br />
          <br />
          <p style="text-align:center;">アカウントを削除する</p>
          <v-layout>
            <v-spacer></v-spacer>
            <v-btn block right class="red darken-3 white--text" @click="deleteUser">削除する</v-btn>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>


<script>
import axios from "~/plugins/axios.js";
import headerComponent from "~/components/header";
export default {
  data() {
    return {
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
      passwordRules: [v => !!v || "必須項目です。"]
    };
  },
  computed: {
    BooleanChange() {
      if (this.radios === true) {
        return "true";
      } else {
        return "false";
      }
    }
  },
  methods: {
    editUser() {
      axios
        .put(
          `users/${this.Cookie.id}`,
          {
            user_update_params: {
              name: this.name,
              email: this.email,
              user_private: this.radios
            }
          },
          {
            headers: {
              Authorization: `Bearer ${this.Cookie.token}`
            }
          }
        )
        .then(response => response.data)
        .then(json => {
          alert("編集しました");
          this.$router.push("/mypage/edit");
          console.log(json);
          localStorage.name = json.name;
          localStorage.user_private = json.user_private;
          localStorage.email = json.email;
        })
        .catch(error => {
          alert(error);
        });
    },
    deleteUser() {
      if (confirm("本当に削除しますか？")) {
        axios
          .delete(`users/${this.Cookie.id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.Cookie.token}`
            }
          })
          .then(response => {
            alert("ユーザーは消去されました。");
            this.$cookies.removeAll("login_cookie");
            this.$router.push("/");
          });
      }
    }
  },
  components: {
    headerComponent
  },

  asyncData(context) {
    console.log("editページのasyncDataです");
    const cookies = JSON.parse(context.app.$cookies.get("login_cookie")); //asyncDataではCookieは取れないため、contextから気合で持ってきて頑張る。
    return axios
      .get(`/users/${cookies.id}`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`
        }
      })
      .then(response => {
        console.log(response, "あしんくでーた");
        return {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          radios: response.data.user_private,
          Cookie: cookies
        };
      });
  }

  // async asyncData({ params }) {
  //   // const test =  JSON.parse(this.$cookies.get("login_cookie"))
  //   const { data } = await axios.get(
  //     `https://mukimukiroku.herokuapp.com/users/5`,
  //     {
  //       aaa: {}
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer Pd1inj2kk3PMa37BaBDi5Wj2`
  //       }
  //     }
  //     // {
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //     Authorization: "Bearer HD4UDQhy4JoqrUNcuQ344ENm"
  //     //   }
  //     // }
  //   );
  //   console.log(data.id, "data表示");
  //   return { title: data };
  // }

  // asyncData(context) {
  //   // const loginid = { login_id: params.id };
  //   // let { title } = await;
  //  axios
  //     .get(`https://mukimukiroku.herokuapp.com/users/5`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer HD4UDQhy4JoqrUNcuQ344ENm"
  //       }
  //     })
  //     // .then(res => {
  //     //   return { title: res };
  //     // });
  // },
};
</script>


<style >
</style>
