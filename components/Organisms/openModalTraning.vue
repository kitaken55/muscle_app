<template>
  <!-- モーダル -->
  <div id="overlay" @click="clickEvent">
    <div class="content" @click="stopEvent">
      <div class="title">
        <p class="title-text1">{{ syumoku.type }}</p>
        <p class="title-text2">{{ syumoku.text }}</p>
      </div>

      <div class="input">
          <input class="input-traning" type="number" placeholder="重量(kg)">
          <input class="input-traning" type="number" placeholder="回数">
          <input class="input-traning" type="number" placeholder="インターバルタイム">
          <input class="input-traning" type="number" placeholder="自覚運動強度">
      </div>

      <div class="modalButton">
        <p class="modalButton__text">記録する</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
export default {
  data() {
    return {
      weight: null,
      fat: null,
      calorie: null
    };
  },
  props:["syumoku"],
  methods: {
    clickEvent() {
      this.$emit("from-child");
    },
    stopEvent() {
      event.stopPropagation();
    }
  },
  components: {
    modalInput: () => import("~/components/Molecule/modalInput"),
    modalButton: () => import("~/components/Atom/modalButton")
  }
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
}

#overlay {
  z-index: 1;

  /*画面全体を覆う設定*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  z-index: 2;
  width: 80%;
  height: 463px;
  padding: 1.5em 2em;
  border-radius: 5px;
  background: #fff;
}

.content_marginBottom {
  margin-bottom: 30px;
}

.modalButton {
  height: 60px;
  background: rgb(26, 118, 210);
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    margin: 0 !important;
    font-size: 19px;
    font-weight: bold;
    color: white;
  }
}

.title {
  text-align: center;
}

.title-text1 {
  font-size: 12px;
  background: gray;
  display: inline;
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  font-weight: bold;
}

.title-text1 {
  font-weight: bold;
}

.input-traning {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
    margin-top: 30px;
}
</style>