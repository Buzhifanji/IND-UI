<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const pages = router
  .getRoutes()
  .filter((route) => !route.meta.hide)
  .map((route) => ({ name: route.name }))
</script>

<template>
    <header>
    <h1>🦄🦄🦄 IND-UI playground</h1>
    <nav>
      <template v-for="(page, i) in pages" :key="page.name">
        <router-link :to="page" v-slot="{ route }">{{
          route.fullPath
        }}</router-link>
        <template v-if="i < pages.length - 1"> · </template>
      </template>
    </nav>
  </header>

  <section>
    <router-view />
  </section>

  <footer>
    <p>
      ©2022 Buzhifanji 
      <br />
      <!-- <a :href="sourceCodeLink">Source Code</a> -->
    </p>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 20px 0;
}
</style>
