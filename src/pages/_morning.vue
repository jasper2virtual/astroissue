<script setup lang="ts">
function testme(e){
  console.log('testme');
}
</script>

<template>

  <button @click.exact="testme">test</button>
</template>

<style scoped>
.morning-vue{
  color: yellow;
}
</style>