<template>
  <div class="switchButton">
    <div class="switchButton__left">記録</div>
    <div class="switchButton__right">閲覧</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.switchButton {
  height: 43px;
  display: flex;
  border: 1px solid white;
  border-radius: 2px;

  &__left {
    width: 50%;
    display: flex;
    background: white;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
  }

  &__right {
    width: 50%;
    color: white;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }


}
</style>