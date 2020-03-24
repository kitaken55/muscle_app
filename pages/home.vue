<template>
  <!-- 体重と体重のグラフ・上にヘッダーはあるか。参考はgitlab。フォームと日付の部分は、レスポンシブで縦に並べたり、横に並べたりする。 -->
  <v-app>
    <headerComponent>ホーム</headerComponent>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#fff">
            <v-card-title class="headline">今日の記録</v-card-title>
            <v-card-actions class="d-block">
              <div>体重</div>
              <div class="d-flex">
                <input v-model="record_list.body_weight" type="text" class="border" />
                <div class="kg">&thinsp;kg</div>
              </div>
              <div>体脂肪率</div>
              <div class="d-flex">
                <input v-model="record_list.fat" type="text" class="border" />
                <div class="kg">&thinsp;%</div>
              </div>
              <div>摂取カロリー</div>
              <div class="d-flex">
                <input v-model="record_list.calorie" type="text" class="border" />
                <div class="kg">&thinsp;kcol</div>
                <v-btn class="elevation-0" style="margin-left: 10px" @click="dialog = !dialog">詳細記録</v-btn>
              </div>
            </v-card-actions>
            <v-card-actions class="d-block">
              <div>日付</div>
              <input slot="activator" v-model="this.today" :placeholder="today" readonly />
            </v-card-actions>
            <v-card-actions>
              <v-btn @click="createMeasures" block outlined style="margin-bottom: 5px;">記録する</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- 体重とグラフ部分 -->
        <v-col cols="12">
          <v-card color="#fff">
            <div>
              <v-card-title class="headline black-text">体重とグラフ</v-card-title>
              <v-card-subtitle>クリックで詳細表示</v-card-subtitle>

              <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">日付</th>
                      <th class="text-left">体重</th>
                      <th class="text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- dialog2Openの引数にデータを送って、それをモーダルで表示。 -->
                    <tr @click="dialog2Open(item)" v-for="item in measures_data" :key="item.name">
                      <td>{{ item.created_at.substr( 0, 10 ) }}</td>
                      <td>{{ item.body_weight }}</td>
                      <td>
                        <v-btn small depressed @click.stop="editMeasures">編集</v-btn>
                        <v-btn
                          small
                          depressed
                          class="red--text"
                          @click.stop="deleteMeasures(item.id, )"
                        >削除</v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <!-- </div> -->
              <!-- グラフ -->
              <v-card
                class="mx-auto text-center"
                color="white"
                dark
                style="margin: auto !important;"
                flat
              >
                <v-card-text>
                  <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                      :value="value"
                      color="rgba(0, 0, 0, .8)"
                      height="100"
                      padding="24"
                      stroke-linecap="round"
                      smooth
                    >
                      <template v-slot:label="item">${{ item.value }}</template>
                    </v-sparkline>
                  </v-sheet>
                </v-card-text>
              </v-card>
              <!-- グラフ表示終 -->
            </div>
          </v-card>
        </v-col>

        <!-- 筋トレ記録  -->
        <v-col cols="12">
          <v-card color="#fff">
            <div>
              <v-card-title class="headline black-text">トレーニング記録</v-card-title>
              <v-card-subtitle>クリックで詳細表示</v-card-subtitle>

              <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">日付</th>
                      <th class="text-left">記録</th>
                      <th class="text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr @click="dialog2Open(item)" v-for="item in measures_data" :key="item.name">
                      <td>{{ item.created_at.substr( 0, 10 ) }}</td>
                      <td>{{ item.body_weight }}</td>
                      <td>
                        <v-btn small depressed>編集</v-btn>
                        <v-btn small depressed class="red--text">削除</v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <!-- グラフ表示終 -->
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 入力ダイヤログ -->
    <v-row justify="center">
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title>
            <span class="headline" style="margin-left: 10px;">詳細入力</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <div>首</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.body_neck" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>肩</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.shoulder" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>胸</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.breast" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>左二等筋</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.left_second_muscle" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>右二等筋</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.right_second_muscle" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>左前腕</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.left_forearm" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>右前腕</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.right_forearm" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>上腹部</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.upper_abdominal" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>下腹部</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.lower_abdomen" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>ウエスト</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.waist" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>ヒップ</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.hip" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>左太もも</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.left_thigh" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>右太もも</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.right_thigh" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>左ふくらはぎ</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.left_calf" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
              <div>右ふくらはぎ</div>
              <div class="d-flex" style="margin-bottom: 10px">
                <input v-model="record_list.right_calf" type="text" class="border" />
                <div class="kg">&thinsp;cm</div>
              </div>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- 確認ダイヤログ -->
    <v-row justify="center">
      <v-dialog v-model="dialog2">
        <v-card>
          <v-card-title>
            <span class="headline" style="margin-left: 10px;">詳細</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <!-- if文でもし、値があれば表示する仕様にする。 -->
              <pre>{{ dialog2_text }}</pre>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <p id="test-dialog"></p>
    <!-- 確認ダイヤログ終了 -->
    <!-- ダイヤログ -->
  </v-app>
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
    async createMeasures() {
      if (this.$cookies.get("login_cookie")) {
        const test = JSON.parse(this.$cookies.get("login_cookie"));
        const test2 = {
          measure_params: {
            body_weight: this.record_list.body_weight,
            fat: this.record_list.fat,
            calorie: this.record_list.calorie,
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
        console.log();
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
              console.log(row.id, "rowのid");
              console.log(id, "id");
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
    }
  },
  created() {
    if (this.$cookies.get("login_cookie")) {
      const test = JSON.parse(this.$cookies.get("login_cookie"));
      axios
        .get(`users/${test.id}/measures`, {
          headers: {
            Authorization: `Bearer ${test.token}`
          }
        })
        .then(res => (this.measures_data = res.data));
    }
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
    headerComponent: () => import("~/components/header")
  }
};
</script>

<style scoped>
#app {
  background: #2196f3;
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

/* 体重のテーブル */
</style>