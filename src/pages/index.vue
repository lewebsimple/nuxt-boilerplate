<template>
  <div id="home">
    <h1>Nuxt.js boilerplate</h1>
    <Hello />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {
    title: "Home",
  },
});
</script>
