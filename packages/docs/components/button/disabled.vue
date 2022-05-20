<template>
  <section>
    <i-button disabled>default</i-button>
    <i-button variant="primary" disabled>primary</i-button>
    <i-button variant="success" disabled>success</i-button>
    <i-button variant="warning" :disabled="isDisabled">warning</i-button>
    <i-button variant="danger" :disabled="isDisabled">warning</i-button>
    <i-button @click="change">change disabled</i-button>
  </section>
</template>


<script setup lang="ts">
import { ref } from "vue";

const isDisabled = ref<boolean>(true)

function change() {
  isDisabled.value = !isDisabled.value
}
</script>