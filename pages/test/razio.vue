<template>
  <div>
    <form id="radioGroup">
      <!-- 1つ目のラジオボタン群 -->
      <label>
        <input type="radio" name="fruit" value="apple" checked />Apple
      </label>
      <label>
        <input type="radio" name="fruit" value="orange" />Orange
      </label>
      <label>
        <input type="radio" name="fruit" value="grape" />Grape
      </label>
      <!-- 2つ目のラジオボタン群 -->
      <label>
        <input type="radio" name="drink" value="coke" checked />coke
      </label>
      <label>
        <input type="radio" name="drink" value="wine" />wine
      </label>
      <label>
        <input type="radio" name="drink" value="tea" />tea
      </label>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>