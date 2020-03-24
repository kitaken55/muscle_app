<template>
  <div>
    <headerComponent>ルーティン</headerComponent>
    <p style="margin-top: 50px;">comming soon...</p>
  </div>
</template>

<script>
export default {
  components: {
    headerComponent: () => import("~/components/header")
  }
};
</script>