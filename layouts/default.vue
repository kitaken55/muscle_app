<template>
  <div v-if="show">
    <v-app>
      <nuxt style="padding-top: 55px; padding-bottom: 55px;"></nuxt>
    </v-app>
    <input type="date" name="" id="">

    <!-- ツールバー -->
    <v-bottom-navigation style="padding-left: 20px;" class="sm-size" color="primary" fixed>
      <v-btn value="measurement" to="/home">
        <span>計測</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"
          />
        </svg>
      </v-btn>

      <v-btn value="traning" to="/traning" active-class>
        <span>トレーニング</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
          />
        </svg>
      </v-btn>

      <v-btn value="history" to="/routine">
        <span style="border-bottom: none;">ルーティン</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path
            d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
          />
          <path d="M0 0h24v24H0V0z" fill="none" />
        </svg>
      </v-btn>
      <v-btn value="timer" to="/timer">
        <span>タイマー</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
          />
        </svg>
      </v-btn>
    </v-bottom-navigation>
  </div>
  <div v-else>
    <p>ブラウザ版は開発中です</p>
    <p>スマートフォンで再度お試しください。</p>
  </div>
</template>

<script>
// import headerComponent from "~/components/header"
export default {
  css: ["@/assets/main.css"],
  data() {
    return {
      drawer: false,
      nav_lists: [
        { name: "マイページ", icon: "mdi-vuetify", route: "/mypage/edit" },
        { name: "ログアウト", icon: "mdi-cogs", route: "/mypage/logout" }
      ],
      show: null
    };
  },
  methods: {
    showPage() {
      if (window.innerWidth <= 420) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  created() {
    this.showPage();
  }
};
</script>


<style>
.sm-size {
  display: none !important;
}

.floating-menu {
  height: 100px;
  position: fixed;
  right: 0%;
  top: 80%;
}

.no-flex {
  flex: 0 1 auto;
}

.border-bottom {
  border-bottom: 1px solid rgb(0, 0, 0);
}

@media screen and (max-width: 480px) {
  .sm-size {
    display: flex !important;
    /* overflow: visible; */
    justify-content: flex-start !important;
  }
}
</style>