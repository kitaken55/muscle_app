<template>
  <div>
    <div v-for="item of items" :key="item.id">
      <p>{{ item }}</p>
    </div>
    <p>{{ test }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    test() {
      console.log(items);
    }
  },
  props: ["items"]
};
</script>

<style scoped>
</style>