<template>
  <div class="homeRecordCard">
    <div class="homeRecordCard__container">
      <h1 class="homeRecordCard__container_text-blue">Body :</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
.homeRecordCard {
  height: 560px;
  background: white;
  margin-top: 35px;
  border-radius: 5px;

  &__container {
    padding: 20px;

    &_text-blue {
      color: rgba(22, 137, 236, 100);
    }
  }
}
</style>