<template>
  <div class="app">
    <headerComponent>記録確認</headerComponent>
    <div class="switchButton2">
      <div class="switchButton2__left" @click="writeTansition">記録</div>
      <div class="switchButton2__right">閲覧</div>
    </div>
    <home-record-card></home-record-card>
  </div>
</template>

<script>
import VModal from "vue-js-modal";
export default {
  data() {
    return {};
  },
  methods: {
    writeTansition() {
      this.$router.push('/home');
    }
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

  .switchButton2 {
  height: 43px;
  display: flex;
  border: 1px solid white;
  border-radius: 2px;
  margin-top: 30px;

  &__left {
    width: 50%;
    display: flex;
    color: white;
    background: none;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
  }

  &__right {
    width: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
}
</style>