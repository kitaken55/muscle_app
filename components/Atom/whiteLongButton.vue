<template>
  <div class="whiteLongButton">
      <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    
  }
};
</script>

<style>
.whiteLongButton {
  border: 1px solid rgba(112, 112, 112, 100);
  border-radius: 5px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>