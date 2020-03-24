<template>
  <v-dialog v-model="dialog" width="500">
    <v-date-picker
      v-model="date"
      value="defaultValue"
      name="input_month"
      locale="ja-jp"
      :day-format="date => new Date(date).getDate()"
    ></v-date-picker>
    <v-btn @click="emitTest">更新</v-btn>
    <p></p>
  </v-dialog>
</template>

<script>
export default {
  // v-date-picekrタグのv-modelの値をこのコンポーネント(子)から親に持っていきたい。
  data() {
    return {
      dialog: false,
    //   date: null,
      attributes: [
        {
          date: new Date()
        }
      ]
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    emitTest() {
      // 正規表現してから
      //   console.log(date)
      const str = this.date;
      const test = str.replace(/-/g, "/");
      this.$emit("my-emit", test);
      this.close();
    }
  },
  computed: {}
};
</script>

<style scoped>
.v-dialog--active {
  margin-top: -80% !important;
}
</style>