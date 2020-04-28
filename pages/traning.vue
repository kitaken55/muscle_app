<template>
  <div>
    <header-component>トレーニング</header-component>
    <div class="headerSelect">
      <ul class="headerSelect__ul">
        <li @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]">バーベル</li>
        <li @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]">自重</li>
        <li @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]">ウェイト</li>
        <li @click="activeTab=4" :class="[ activeTab === 4 ? 'active' : '' ]">ダンベル</li>
        <li @click="activeTab=5" :class="[ activeTab === 5 ? 'active' : '' ]">マシン</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      Recipe: null
    }
  },
  components: {
    headerComponent: () => import("~/components/header")
  },
  methods: {
  }
};
</script>

<style lang="scss">
.headerSelect {
  height: 70px;
  border-bottom: 1px solid rgb(229, 229, 229);

  &__ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    height: 70px;
    padding: 0 !important;

    li {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .active {
    background: rgba(173, 217, 255, 0.3);
  }
}
</style>