<template>
  <!-- モーダル -->
  <div id="overlay" @click="clickEvent">
    <div class="content" @click="stopEvent">
      <modal-input class="content_marginBottom" title="肩" unit="cm"></modal-input>
      <modal-input class="content_marginBottom" title="胸" unit="cm"></modal-input>
      <modal-input class="content_marginBottom" title="腰" unit="cm"></modal-input>
      <modal-button class="content_marginTop"></modal-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickEvent() {
      this.$emit("from-child2");
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
  height: 493px;
  padding: 3em 2em;
  border-radius: 5px;
  background: #fff;
}

.content_marginBottom {
  margin-bottom: 30px;
}

.content_marginTop {
    margin-top: 70px;
}
</style>