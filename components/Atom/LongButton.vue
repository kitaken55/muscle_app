<template>
  <div class="longButton">
    <p class="longButton__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.longButton {
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 10px;
  background: rgba(26, 118, 210, 100);

  &__text {
    color: white;
    height: 100%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>