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
  </header>
  <main>
    <section class="left">
    <nav>
      <template v-for="(page, i) in pages" :key="page.name">
        <router-link :to="page" v-slot="{ route }">{{
          route.fullPath
        }}</router-link>
        <template v-if="i < pages.length - 1"> · </template>
      </template>
    </nav>
  </section>
  <section class="right">
      <section class="content">
    <router-view />
  </section>


  </section>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
main {
  display: flex;
  height: 100%;
}
.left {
  width: 50%;
}
.right {
  flex: 1;
}
nav {
  padding: 20px 0;
  height: 100%;
  overflow-y: scroll;
}
nav a {
  display: inline-block;
  margin-bottom: 10px;
  text-align: right;

}
.content {
  height: 840px;
}
</style>
