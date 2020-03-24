<template>
  <!-- 各トレーニング画面 -->
  <v-app>
    <headerComponent>記録入力</headerComponent>
    <v-container>
      <p
        style="margin:0; font-size: 20px; color:rgb(0,0,0,0.7)"
      >{{ $route.params.trainingpage.type }} /</p>
      <p style="font-size: 20px; color:rgb(0,0,0,0.7)">{{ $route.params.trainingpage.text }}</p>
      <v-text-field v-model="sets" label="セット数" required></v-text-field>
      <v-text-field v-model="weight" label="重量" required></v-text-field>
      <v-text-field v-model="repetitions" label="回数" required></v-text-field>
      <v-text-field v-model="interval_time" label="インターバルタイム" required></v-text-field>
      <v-text-field v-model="rpe" label="自覚運動強度" required></v-text-field>
      <input class="color:rgb(0,0,0,0.7)" v-model="this.today" :placeholder="this.today" readonly />
      <v-btn
        @click="createTraining"
        block
        color="blue"
        class="white--text"
        style="margin-top: 30px;"
      >記録</v-btn>
    </v-container>
  </v-app>
</template>


<script>
import axios from "~/plugins/axios.js";
export default {
  data() {
    return {
      test: JSON.parse(this.$cookies.get("login_cookie")),
      test1: this.$route.params.trainingpage.text, //詳細部分
      test2: this.$route.params.trainingpage.type, //バーベルとか
      id: this.$route.params.trainingpage.id,
      //入力値
      sets: "", //セット数
      weight: "", //重量
      repetitions: "", //回数
      interval_time: "", //インターバルタイム
      rpe: "" //自覚的運動強度
    };
  },
  methods: {
    createTraining() {
      axios
        .post(
          `/exercises/${this.id}/score`,
          {
            sets: Number(this.sets),
            score_params: {
              weight: this.weight,
              repetitions: this.repetitions,
              interval_time: this.interval_time,
              rpe: this.rpe,
              date: this.today
            }
          },
          {
            headers: {
              Authorization: `Bearer ${this.test.token}`
            }
          }
        )
        .then(res => {
          alert("トレーニング記録しました");
        });
    }
  },
  components: {
    headerComponent: () => import("~/components/header")
  },
  computed: {
    today() {
      const now = new Date();
      const year = now.getFullYear();
      const mon = now.getMonth() + 1;
      const day = now.getDate();

      // 今日の日付
      return year + "/" + mon + "/" + day;
    }
  }
};
</script>