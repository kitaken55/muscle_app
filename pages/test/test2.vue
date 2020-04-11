<template>
  <div>
    <button oncopy="return false;" class="btn-circle-3d" @click="increment">+1</button>

    <p v-if="number">未入力</p>
    <p v-else>{{ number }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
div {
  text-align: center;
}

.btn-circle-3d {
  display: inline-block;
  text-decoration: none;
  background: #ff8181;
  color: #fff;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px #bd6565;
  transition: 0.2s;
  user-select: none;
  touch-action: manipulation;
}

.btn-circle-3d:active {
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
  border-bottom: none;
}
</style>