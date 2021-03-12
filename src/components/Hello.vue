<template>
  <div id="hello">Hello {{ message }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const message = ref<string>("World");
    return { message };
  },
});
</script>
