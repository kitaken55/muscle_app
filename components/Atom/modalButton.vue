<template>
  <div class="modalButton">
    <p class="modalButton__text">記録する</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.modalButton {
  height: 60px;
  background: rgb(26, 118, 210);
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    margin: 0!important;
    font-size: 19px;
    font-weight: bold;
    color: white;
  }
}
</style>