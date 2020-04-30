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
    <div v-if="activeTab===1">
      <div>
        <div v-for="item of barbell" :key="item.id">
          <p @click="test(item)" class="item-style">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div v-if="activeTab===2">
      <div>
        <div v-for="item of zizyu" :key="item.id">
          <p @click="test(item)" class="item-style">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div v-if="activeTab===3">
      <div>
        <div v-for="item of weight" :key="item.id">
          <p @click="test(item)" class="item-style">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div v-if="activeTab===4">
      <div>
        <div v-for="item of dumbbell" :key="item.id">
          <p @click="test(item)" class="item-style">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div v-if="activeTab===5">
      <div>
        <div v-for="item of Machine" :key="item.id">
          <p @click="test(item)" class="item-style">{{ item.text }}</p>
        </div>
      </div>
    </div>

    <open-modal-traning v-if="showContent" @from-child="closeModal" :syumoku="syurui"></open-modal-traning>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      Recipe: null,
      showContent: false,
      syurui: null,
      barbell: [
        { id: 1, text: "ベンチプレス", type: "バーベル" },
        { id: 2, text: "スクワット", type: "バーベル" },
        { id: 3, text: "デッドリフト", type: "バーベル" },
        { id: 4, text: "オーバーヘッドプレス", type: "バーベル" },
        {
          id: 5,
          text: "インクラインベンチプレス",
          type: "バーベル"
        },
        { id: 6, text: "フロントスクワット", type: "バーベル" },
        { id: 7, text: "バーベルカール", type: "バーベル" },
        { id: 8, text: "ベントオーバーロー", type: "バーベル" },
        { id: 9, text: "スモウデッドリフト", type: "バーベル" },
        { id: 10, text: "ヒップスラスト", type: "バーベル" },
        {
          id: 11,
          text: "ルーマニアンデッドリフト",
          type: "バーベル"
        },
        { id: 12, text: "バーベルシュラッグ", type: "バーベル" }
      ],
      zizyu: [
        { id: 13, type: "自重", text: "懸垂" },
        { id: 14, type: "自重", text: "腕立て伏せ" },
        { id: 15, type: "自重", text: "ディップス" },
        { id: 16, type: "自重", text: "逆手懸垂" },
        { id: 17, type: "自重", text: "自重スクワット" }
      ],
      weight: [
        { id: 18, type: "ウェイト", text: "パワークリーン" },
        { id: 19, type: "ウェイト", text: "クリーンアンドジャーク" },
        { id: 20, type: "ウェイト", text: "スナッチ" },
        { id: 21, type: "ウェイト", text: "プッシュプレス" },
        { id: 22, type: "ウェイト", text: "クリーン" }
      ],
      dumbbell: [
        { id: 23, type: "ダンベル", text: "ダンベルベンチプレス" },
        { id: 24, type: "ダンベル", text: "ダンベルカール" },
        {
          id: 25,
          type: "ダンベル",
          text: "ダンベルショルダープレス"
        },
        {
          id: 26,
          type: "ダンベル",
          text: "インクラインダンベルベンチプレス"
        },
        { id: 27, type: "ダンベル", text: "クリーンダンベルロー" }
      ],
      Machine: [
        { id: 28, type: "マシン", text: "レッグプレス" },
        { id: 29, type: "マシン", text: "レッグエクステンション" },
        { id: 30, type: "マシン", text: "ラットプルダウン" }
      ]
    };
  },
  components: {
    headerComponent: () => import("~/components/header"),
    traningList: () => import("~/components/traning_list"),
    openModalTraning: () => import("~/components/Organisms/openModalTraning")
  },
  methods: {
    test(value) {
      this.syurui = value;
      this.showContent = true;
    },
    closeModal() {
      this.showContent = false;
    }
  }
};
</script>

<style lang="scss">
p {
  font-size: 22px;
}

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
      border-right: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  .active {
    background: rgba(173, 217, 255, 0.3);
  }
}

.item-style {
  margin: 0 !important;
  padding: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>