<template>
  <v-app>
    <v-container>
      <v-navigation-drawer app v-model="drawer" clipped>
        <v-container>
          <v-list dense nav>
            <v-list-item :to="`${nav_list.route}`" v-for="nav_list in nav_lists" :key="nav_list.name">
              <v-list-item-icon>
                <v-icon>{{ nav_list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
      </v-navigation-drawer>

      <!-- ドロワーのボタン(ハンバーガー) -->
      <v-container class style="text-align: right">
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      </v-container>

      <!-- トレーニング開始ボタン -->
      <nuxt-link to="test">
        <v-btn width="100%" text outlined color="white" class="blue font-weight-bold">トレーニング開始</v-btn>
      </nuxt-link>

      <div style="margin-top: 20px;"></div>
      <!-- 本人情報 -->
      <v-card class="mx-auto elevation-0" outlined>
        <v-list-item three-line>
          <v-list-item-avatar tile size="40" color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">きたけん</v-list-item-title>
            <v-list-item-subtitle>トレーニング記録アプリのプロトタイプです</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions style="margin-left: 10px">
          <v-btn text nuxt outlined color="white" class="blue">Add Workout</v-btn>
        </v-card-actions>
      </v-card>
      <!-- 本人情報 -->

      <div style="margin-top: 20px;"></div>

      <!-- いろんなエクササイズ一覧 -->

      <v-card class="mx-auto elevation-0" outlined>
        <v-card-title>All Exercises</v-card-title>

        <v-container>
          <v-row>
            <v-col cols="4">
              <nuxt-link to="training">
                <div
                  style="height: 90px; width: 90px; background-color: #2196f3; border-radius: 20px; text-align: center;"
                >test</div>
              </nuxt-link>
            </v-col>
            <v-col cols="4">
              <nuxt-link to="training">
                <div
                  style="height: 90px; width: 90px; background-color: #2196f3; border-radius: 20px; text-align: center;"
                >test</div>
              </nuxt-link>
            </v-col>
            <v-col cols="4">
              <nuxt-link to="training">
                <div
                  style="height: 90px; width: 90px; background-color: #2196f3; border-radius: 20px; text-align: center;"
                >test</div>
              </nuxt-link>
            </v-col>
            <v-col cols="4">
              <nuxt-link to="training">
                <div
                  style="height: 90px; width: 90px; background-color: #2196f3; border-radius: 20px; text-align: center;"
                >test</div>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <!-- いろんなエクササイズ一覧 終-->

      <div style="margin-top: 20px;"></div>

      <!-- グラフ部分 コンポーネント化する -->
      <v-card class="text-center" color="#2196f3" dark>
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
            <v-sparkline
              :labels="labels"
              :value="value"
              color="rgba(255, 255, 255, .7)"
              stroke-linecap="round"
              smooth
            ></v-sparkline>
          </v-sheet>
        </v-card-text>
        <v-card-text>
          <div class="display-1 font-weight-thick">グラフ</div>
        </v-card-text>
      </v-card>

      <div style="margin-top: 20px;"></div>

      <v-card class="mx-auto elevation-0" min-width="100%" outlined>
        <v-card-title>Workout History</v-card-title>
        <v-card-text>今までの記録を表で出す↓</v-card-text>
        <v-card-text>今日の記録、やったら出る↓</v-card-text>
      </v-card>

      <div style="margin-top: 20px;"></div>

      <v-card class="mx-auto elevation-0" min-width="100%" outlined>
        <v-card-title>フォロー</v-card-title>
        <v-card-text>居たら出す</v-card-text>
        <v-card-title>フォロワー</v-card-title>
        <v-card-text>居たら出す</v-card-text>
      </v-card>
    </v-container>

    <div style="margin-top: 20px;"></div>

    <v-card>
      <v-footer class="font-weight-medium">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>マッスルーム</strong>
        </v-col>
      </v-footer>
    </v-card>

    <v-card-text style="height: 100px; position: fixed; right: 0%; top: 80%;">
      <v-fab-transition>
        <nuxt-link to="test">
          <v-btn color="#ff5252" dark fixed right fab nuxt>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </nuxt-link>
      </v-fab-transition>
    </v-card-text>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      // ドロワー部分
      nav_lists: [
        { name: "マイページ", icon: "mdi-vuetify", route: "mypage/edit" },
        { name: "ユーザー検索", icon: "mdi-cogs", route: "find" },
        { name: "ログアウト", icon: "mdi-palette", route: "logout" }
      ],
      // グラフ部分
      labels: ["12", "3", "6", "9", "12", "3", "6", "9"],
      value: [423, 446, 675, 510, 590, 610, 760],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-google-plus", "mdi-instagram"]
    };
  }
};
</script>
    