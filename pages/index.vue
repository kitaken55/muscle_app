<template style="background: black">
  <v-app>
    <v-app-bar color="rgba(0,0,0,0.2)" class="elevation-0" outlined dark app>
      <v-toolbar-title class="font-weight-thin display-1" style="font-size: 25px !important;">ムキム記録</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="display_pc">
        <v-btn class="font-weight-thin title" nuxt to="/singUp" text>新規登録</v-btn>
        <v-btn class="font-weight-thin title" nuxt to="/login" text>ログイン</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <div class="quotes">
      <h1 class="my-muscle">
        さぁ筋肉に
        <br />コミット
      </h1>
      <div style="margin-top: 20px">
        <nuxt-link to="signUp">
          <v-btn class="new_create" sytle="text-decoration: none;">新規登録</v-btn>
        </nuxt-link>
        <nuxt-link to="login">
          <v-btn class="login deep-orange accent-4 white--text">ログイン</v-btn>
        </nuxt-link>
      </div>
    </div>
  </v-app>
</template>


<script>
export default {
  layout: "start"
};
</script>



<style>
.my-muscle {
  letter-spacing: 3px;
}

.display_sm {
  display: none;
}

.quotes {
  padding: 170px 30px 260px;
  height: 100%;
  text-align: center;
  font-size: 40px;
  background-image: url("../assets/img/kinniku.png");
  background-position: center;
  font-weight: 100;
  color: white;
  font-family: "Noto Sans JP";
}

.sub-title {
  margin-top: 50px;
  text-align: center;
}

.new_create {
  width: 200px;
  margin-right: 20px;
}

.login {
  width: 200px;
}

@media screen and (max-width: 560px) {
  .quotes {
    font-size: 25px;
  }

  .display_sm {
    display: block;
  }

  .display_pc {
    display: none;
  }

  .new_create {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .login {
    width: 100%;
  }
}
</style>