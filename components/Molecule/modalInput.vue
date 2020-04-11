<template>
  <div class="modalInput">
    <p class="modalInput__title">{{ title }}</p>
    <div class="box">
      <input class="boxInput" type="number" />
      <p>{{ unit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    unit: {
        type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.modalInput {
    // padding-left: 30px;
}

.modalInput__title {
  margin: 0 0 0 2px !important;
  font-weight: bold;
}

.box {
    display: flex;
    align-items: center;
    font-size: 19px;

    .boxInput {
        width: 85%
    }

    p {
        margin: 15px 0 0 10px;
        font-weight: 500;
        font-size: 16px;
        width: 15%;
    }
}

.boxInput {
  border: 1px solid rgb(163, 163, 163);
  border-radius: 5px;
  width: 205px;
  height: 44px;
}

input:focus {
  border: 2px solid rgb(26,118,210);
  outline: 0;
}
</style>