<template>
  <v-app>
    <headerComponent>トレーニング</headerComponent>
    <p>{{ list }}</p>
    <v-bottom-navigation color="blue lighten-1" min-width="0">
      <v-btn @click="tranings = barbell">
        <span>バーベル</span>
        <v-icon color="black">mdi-weight</v-icon>
      </v-btn>
      <v-btn @click="tranings = zizyu">
        <span>自重</span>
        <v-icon color="black">mdi-human</v-icon>
      </v-btn>
      <v-btn @click="tranings = weight">
        <span>ウェイト</span>
        <!-- ウェイトリフティングにしたい -->
        <v-icon color="black">mdi-walk</v-icon>
      </v-btn>
      <v-btn @click="tranings = dumbbell">
        <span>ダンベル</span>
        <v-icon color="black">mdi-dumbbell</v-icon>
      </v-btn>
      <v-btn @click="tranings = Machine">
        <span>マシン</span>
        <v-icon color="black">mdi-select-inverse</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-list flat></v-list>
    <traning-list :items="tranings"></traning-list>
  </v-app>
</template>

<script>
import Header5 from "~/components/header.vue";
import TraningList from "~/components/traning_list.vue";
import axios from "~/plugins/axios.js";
export default {
  layout: "default_unbutton",
  data() {
    return {
      tranings: null,
      barbell: [
        { id:1, text: "ベンチプレス", type: "バーベル", icon: "mdi-weight" },
        { id:2, text: "スクワット", type: "バーベル", icon: "mdi-weight" },
        { id:3, text: "デッドリフト", type: "バーベル", icon: "mdi-weight" },
        { id:4, text: "オーバーヘッドプレス", type: "バーベル", icon: "mdi-weight" },
        {
          id:5, text: "インクラインベンチプレス",
          type: "バーベル",
          icon: "mdi-weight"
        },
        { id:6, text: "フロントスクワット", type: "バーベル", icon: "mdi-weight" },
        { id:7, text: "バーベルカール", type: "バーベル", icon: "mdi-weight" },
        { id:8, text: "ベントオーバーロー", type: "バーベル", icon: "mdi-weight" },
        { id:9, text: "スモウデッドリフト", type: "バーベル", icon: "mdi-weight" },
        { id:10, text: "ヒップスラスト", type: "バーベル", icon: "mdi-weight" },
        {
          id:11, text: "ルーマニアンデッドリフト",
          type: "バーベル",
          icon: "mdi-weight"
        },
        { id:12, text: "バーベルシュラッグ", type: "バーベル", icon: "mdi-weight" }
      ],
      zizyu: [
        { id:13, type:"自重", text: "懸垂", icon: "mdi-human" },
        { id:14, type:"自重", text: "腕立て伏せ", icon: "mdi-human" },
        { id:15, type:"自重", text: "ディップス", icon: "mdi-human" },
        { id:16, type:"自重", text: "逆手懸垂", icon: "mdi-human" },
        { id:17, type:"自重", text: "自重スクワット", icon: "mdi-human" }
      ],
      weight: [
        { id:18, type:"ウェイト", text: "パワークリーン", icon: " mdi-walk" },
        { id:19, type:"ウェイト", text: "クリーンアンドジャーク", icon: " mdi-walk" },
        { id:20, type:"ウェイト", text: "スナッチ", icon: " mdi-walk" },
        { id:21, type:"ウェイト", text: "プッシュプレス", icon: " mdi-walk" },
        { id:22, type:"ウェイト", text: "クリーン", icon: " mdi-walk" }
      ],

      dumbbell: [
        { id:23, type:"ダンベル", text: "ダンベルベンチプレス", icon: "mdi-dumbbell" },
        { id:24, type:"ダンベル", text: "ダンベルカール", icon: "mdi-dumbbell" },
        {
          id:25, type:"ダンベル", text: "ダンベルショルダープレス",
          icon: "mdi-dumbbell"
        },
        {
          id:26, type:"ダンベル", text: "インクラインダンベルベンチプレス",
          icon: "mdi-dumbbell"
        },
        { id:27, type:"ダンベル", text: "クリーンダンベルロー", icon: "mdi-dumbbell" }
      ],

      Machine: [
        { id:28, type:"マシン", text: "レッグプレス", icon: "mdi-select-inverse" },
        { id:29, type:"マシン", text: "レッグエクステンション", icon: "mdi-select-inverse" },
        { id:30, type:"マシン", text: "ラットプルダウン", icon: "mdi-select-inverse" }
      ],
      test2: ""
    };
  },
  components: {
    TraningList,
    Header5,
    headerComponent: () => import("~/components/header")
  },
  created() {
    this.tranings = this.barbell;
    const test = JSON.parse(this.$cookies.get("login_cookie"));
    //ここでトレーニング一覧取得
    axios
      .get(`/exercises`, {
        headers: {
          Authorization: `Bearer ${test.token}`
        }
      })
      .then(res => {
        this.test2 = res;
      });
  },
  computed: {
    list() {
      const test = this.test2.data;
      console.log(test, "foreach");
      // test.forEach(element => {
      //   console.log(element);
      // });
    }
  }
};
</script>

<style scoped>
#app {
  /* background: #2196f3; */
}

.v-btn {
  min-width: 0 !important;
}

.v-item-group.v-bottom-navigation {
  box-shadow: none;
}

.v-list {
  border-radius: 0;
}

.no-flex {
  flex: 0 1 auto;
}

.border-bottom {
  border-bottom: 1px solid rgb(0, 0, 0);
}
</style>