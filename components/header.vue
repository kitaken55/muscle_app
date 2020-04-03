<template>
  <div>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">ムキム記録</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item :to="nav_list.route" v-for="nav_list in nav_lists" :key="nav_list.name">
            <v-layout>
              <v-list-item-icon>
                <v-icon>{{ nav_list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-layout>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app clipped-left class="elevation-2">
    <v-app-bar-nav-icon style="position: absolute" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-size: 25px; width: 100%; text-align: center">
        <slot></slot>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      nav_lists: [
        { name: "マイページ", icon: "mdi-vuetify", route: "/mypage/edit" },
        { name: "ログアウト", icon: "mdi-cogs", route: "/mypage/logout" }
      ]
    };
  }
};
</script>