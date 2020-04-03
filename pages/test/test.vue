<template>
  <v-app>
    <v-container style fluid>
      <p>{{ radios || 'null' }}</p>

      <v-radio-group v-model="radios" :mandatory="true">
        <v-radio label="Radio 1" value="true"></v-radio>
        <v-radio label="Radio 2" value="false"></v-radio>
      </v-radio-group>
    </v-container>

    <v-btn @click="test = !test">押すとカレンダー出る</v-btn>
    <v-date-picker
      v-if="tf"
      v-model="defaultValue"
      value="defaultValue"
      name="input_month"
      locale="ja-jp"
      :day-format="date => new Date(date).getDate()"
    ></v-date-picker>

    <span>ここ{{ this.$store.commit('login', ) }}</span>
    <p>ここにCookie{{ webStorage_computed }}</p>

    <p>{{defaultValue}}</p>

    <p>チャート表示</p>
    <chart></chart>
  </v-app>
</template>

<script>
import Chart from "./graf_test2";
export default {
  data() {
    return {
      defaultValue: "",
      DatePickerFormat: "yyyy-MM-dd",
      radios: "null",
      myMessage: "signUp",
      datacollection: null,
      tf: false
    };
  },
  methods: {},
  computed: {
    webStorage_computed() {
      if (this.$cookies.get("login_cookie")) {
        return JSON.parse(this.$cookies.get("login_cookie"));
      }
    }
  },
  components: {
    Chart
  }
};
</script>

<style scoped>
/* .test {
  background-color: red !important;
} */

body {
  background-color: red !important;
}

/* .vsc-initialized {
  background-color: red !important;
} */

#app {
  /* background-color: red !important; */
}
</style>