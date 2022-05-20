<script setup lang="ts">
</script>

<template>
  <section>
    <h2>The button's variant</h2>
    <i-button >default</i-button>
    <i-button variant="primary">primary</i-button>
  </section>
  <section>
    <h2>a</h2>
    <i-button href="www.baidu.com">default</i-button>
  </section>
</template>

<style scoped>
i-button {
  margin-right: 10px;
}
ind-button {
  --my-background: rgb(67, 156, 144);
  width: 200px;
}
</style>
