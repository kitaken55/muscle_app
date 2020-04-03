<template>
  <div class="app">
    <headerComponent>記録確認</headerComponent>
      <switchButton class="app__switchButton"></switchButton>
      <home-record-card></home-record-card>
  </div>
</template>

<script>
import VModal from "vue-js-modal";
export default {
  data() {
    return {};
  },
  components: {
    headerComponent: () => import("~/components/header"),
    switchButton: () => import("~/components/Atom/switchButton"),
    homeRecordCard: () => import("~/components/Organisms/homeRecordCard")
  }
};
</script>

<style lang="scss">
.app {
  background: rgba(22, 137, 236, 100);
  padding: 15px;

    &__switchButton {
    margin-top: 35px;
  }
}
</style>