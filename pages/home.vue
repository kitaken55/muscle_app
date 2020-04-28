<template>
  <div class="app">
    <headerComponent>入力ページ</headerComponent>
    <switchButton class="app__switchButton"></switchButton>
    <home-card
      class="app__homeCard"
      title="今日の体重測定"
      item1="体重"
      item2="体脂肪率"
      item3="摂取カロリー"
      input1="kg"
      input2="%"
      input3="kcal"
      :openModalHandler="openModal"
    ></home-card>

    <home-card
      class="app__homeCard"
      title="今日の身体測定"
      item1
      item2="肩"
      item3="胸"
      input1="cm"
      input2="cm"
      input3="cm"
      :openModalHandler="openModal2"
    ></home-card>

    <div class="app__traningPage-move">
      <div class="app__traningPage-move__container">
        <h1>トレーニング記録</h1>
        <white-long-button
          @click.native="$router.push('traning')"
          class="app__traningPage-move__container_button-margin"
        >入力ページへ</white-long-button>
      </div>
    </div>

    <button v-on:click="openModal">Click</button>

    <open-modal v-if="showContent" @from-child="closeModal" @addWeight="createMeasures(index)"></open-modal>
    <open-modal2 v-if="showContent2" @from-child2="closeModal2"></open-modal2>
  </div>
</template>

<script>
import axios from "~/plugins/axios.js";
export default {
  data() {
    return {
      number2: 0,
      dialog: false,
      dialog2: false,
      dialog2_text: null,
      //モーダル部分
      showContent: false,
      showContent2: false, //身体測定の方のモーダル
      record_list: [
        {
          body_weight: null, //体重,
          fat: null, //体脂肪率
          calorie: null, //摂取カロリー,
          body_neck: null, //首周り
          shoulder: null, //肩
          breast: null, //胸
          left_second_muscle: null, //左二等筋
          right_second_muscle: null, //右二等筋
          left_forearm: null, //左前腕
          right_forearm: null, //右前腕
          upper_abdominal: null, //上腹部
          lower_abdomen: null, //下腹部
          waist: null, //ウエスト
          hip: null, //ヒップ
          left_thigh: null, //左太もも
          right_thigh: null, //右太もも
          left_calf: null, //左ふくらはぎ
          right_calf: null //右ふくらはぎ
        }
      ],
      value: [0, 0, 77, 55, 40, 50],
      select_data: null,
      body_weight: "",
      // Cookie: JSON.parse(this.$cookies.get("login_cookie")),
      measures_data: [],
      measures_data_number: 0
    };
  },
  methods: {
    dialog2Open(item) {
      this.dialog2 = true;
      this.dialog2_text = item;
    },
    //体重計測API
    async createMeasures(emitValue) {
      if (this.$cookies.get("login_cookie")) {
        const test = JSON.parse(this.$cookies.get("login_cookie"));
        const test2 = {
          measure_params: {
            body_weight: emitValue.weight,
            fat: emitValue.fat,
            calorie: emitValue.colorie,
            date: this.today //ここはコンピューテッドでも行ける？
          }
        };
        const header = {
          Authorization: `Bearer ${test.token}`
        };
        await axios
          //ここ変更させる。クエリで分岐
          .post("measures/", test2, {
            headers: header
          })
          .then(response => {
            console.log(response.data);
            console.log(this.measures_data);
            this.measures_data.push(response.data);
            alert("記録しました");
            // this.reload();
          })
          .catch(error => {
            alert(error);
          });
      }
    },
    //記録確認API
    kakunin() {
      if (this.$cookies.get("login_cookie")) {
        const test = JSON.parse(this.$cookies.get("login_cookie"));
        const header = {
          Authorization: `Bearer ${test.token}`
        };
        axios
          //ここ変更させる。クエリで分岐
          .get(`/users/${localStorage.id}/scores/`, {
            headers: header
          })
          .then(response => {
            alert(response);
          })
          .catch(error => {
            alert(error);
          });
      }
    },
    deleteMeasures(id) {
      if (this.$cookies.get("login_cookie")) {
        const test = JSON.parse(this.$cookies.get("login_cookie"));
        axios
          //ここ変更させる。クエリで分岐
          .delete(`measures/${id}/`, {
            headers: {
              Authorization: `Bearer ${test.token}`
            }
          })
          .then(response => {
            alert("削除しました");
            const array_number = this.measures_data.findIndex(row => {
              return row.id === id;
            });
            this.measures_data.splice(array_number, 1);
          })
          .catch(error => {
            alert(error);
          });
      }
    },
    editMeasures() {
      alert("編集はあまえ");
    },
    reload() {
      this.$router.go({ path: this.$router.currentRoute.path, force: true });
    },

    show() {
      this.$modal.show("modal-content");
    },
    hide() {
      this.$modal.hide("modal-content");
    },

    openModal: function() {
      this.showContent = true;
    },
    openModal2: function() {
      this.showContent2 = true;
    },
    closeModal() {
      this.showContent = false;
    },
    closeModal2() {
      this.showContent2 = false;
    }
  },
  created() {
    // if (this.$cookies.get("login_cookie")) {
    //   const test = JSON.parse(this.$cookies.get("login_cookie"));
    //   axios
    //     .get(`users/${test.id}/measures`, {
    //       headers: {
    //         Authorization: `Bearer ${test.token}`
    //       }
    //     })
    //     .then(res => (this.measures_data = res.data));
    // }
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
  },
  components: {
    headerComponent: () => import("~/components/header"),
    switchButton: () => import("~/components/Atom/switchButton"),
    homeCard: () => import("~/components/Organisms/homeCard"),
    whiteLongButton: () => import("~/components/atom/whiteLongButton"),
    openModal: () => import("~/components/Organisms/openModal"),
    openModal2: () => import("~/components/Organisms/openModal2")
  }
};
</script>

<style lang="scss">
.app {
  background: rgba(22, 137, 236, 100);
  height: 100%;
  padding: 15px;
}

.app {
  &__switchButton,
  &__homeCard {
    margin-top: 35px;
  }

  &__traningPage-move {
    height: 162px;
    background: white;
    margin-top: 35px;
    border-radius: 5px;

    &__container {
      padding: 20px;

      &_button-margin {
        margin-top: 30px;
      }
    }
  }
}

.black-text {
  color: rgba(0, 0, 0, 0.8);
}

.black-text-sub {
  color: rgba(0, 0, 0, 0.5) !important;
}

.form-control {
  width: 50%;
  border: 1px solid rgb(0, 0, 0);
}

.kg {
  margin-top: 7px;
}

.border {
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
</style>