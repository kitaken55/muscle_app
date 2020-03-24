<template>
  <v-app>
    <headerComponent>マイページ</headerComponent>
    <v-card class="elevation-0" width="100%">
      <v-list flat>
        <v-subheader>Kento@yahoo.co.jpさん</v-subheader>
        <v-list-item-group v-model="item">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <nuxt-link class="link-color-default" :to="item.route">
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    item: null,
    items: [
      { text: "アカウント設定", icon: "mdi-account", route: "mypage/edit" },
      { text: "ログアウト", icon: "mdi-flag", route: "mypage/logout" }
    ]
  }),
  components: {
    headerComponent: () => import("~/components/header")
  }
};
</script>

<style>
.link-color-default {
  text-decoration: none;
  color: rgb(0, 0, 0, 0.7) !important;
}

/* vuetifyから生成されるclass, classよりあとに生成されるため、このクラスに直にやらねばならない */
/* .v-application a {
  color: rgb(0,0,0,0.7);
} */
</style>