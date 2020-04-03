<template>
  <div class="CardDetail">
    <div class="test1">
      <span class="CardDetail__item">{{ item }}</span>
    </div>
    <div class="test2">
      <span class="CardDetail__input">- -</span>
      {{ input }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true
    },
    input: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.CardDetail {
  display: flex;
//   justify-content: space-between;
  align-items: baseline;
  margin: 0 20px;

  &__item {
      
  }

  &__input {
    color: rgba(112, 112, 112, 1);
  }

  span {
    font-size: 20px;
  }

  .test1 {
      width: 80%
  }

  .test2 {
      width: 20%
  }
}
</style>