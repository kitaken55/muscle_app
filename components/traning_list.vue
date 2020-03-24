<template>
  <v-card class="elevation-0" width="100%">
    <v-list flat>
      <v-list-item-group v-model="item">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <nuxt-link class="link-color-default" :to="{ name:'trainingpage-trainingpage', params:{trainingpage: item }}">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      item: null
    };
  },
  props: ["items"]
};
</script>

<style scoped>

.link-color-default {
  color: rgba(0, 0, 0, 0.6);
}

</style>