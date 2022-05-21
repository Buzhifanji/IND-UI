<template>
  <section>
    <i-spin></i-spin>
    <i-spin class="spin"></i-spin>
    <i-spin :style="{'--spin-width': '6px',fontSize: '50px', '--spin-color': 'yellow', '--spin-speed': '5s' }"></i-spin>
  </section>
</template>

<style scoped>
.spin {
  font-size: 25px;
  --spin-width: 5px;
  --spin-color: red;
  --spin-speed: 4s;
}
</style>