<template>
  <!-- モーダル -->
  <div id="overlay" @click="clickEvent">
    <div id="content" @click="stopEvent">
        zzz
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickEvent() {
      this.$emit("from-child");
    },
    stopEvent() {
      event.stopPropagation();
    }
  }
};
</script>

<style>
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

#content {
  z-index: 2;
  width: 80%;
  height: 493px;
  padding: 3em;
  border-radius: 5px;
  background: #fff;
}
</style>