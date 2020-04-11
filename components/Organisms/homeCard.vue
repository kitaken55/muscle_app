<template>
  <div class="homeCard">
    <div class="homeCard__Container">
      <h1 class="homeCard__Container_margin">{{title}}</h1>
      <card-detail class="homeCard__Container_margin" :item="item1" :input="input1"></card-detail>
      <card-detail class="homeCard__Container_margin" :item="item2" :input="input2"></card-detail>
      <card-detail class="homeCard__Container_margin" :item="item3" :input="input3"></card-detail>
      <white-long-button style="cursor: pointer;" v-on:click.native="openModalHandler">入力する</white-long-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    item1: {
      type: String
    },
    item2: {
      type: String
    },
    item3: {
      type: String
    },
    input1: {
      type: String
    },
    input2: {
      type: String
    },
    input3: {
      type: String
    },
    openModalHandler: {
      type: Function
    },
  },
  components: {
    whiteLongButton: () => import("~/components/atom/whiteLongButton"),
    CardDetail: () => import("~/components/Atom/CardDetail")
  },
  methods: {}
};
</script>

<style lang="scss">
.homeCard {
  width: 100%;
  height: 313px;
  background: white;
  border-radius: 5px;

  &__Container {
    padding: 20px;

    .homeCard__Container_margin {
      margin-bottom: 23px;
    }
  }
}
</style>