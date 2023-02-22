<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <section class="container my-6">
    <h1 class="text-4xl">{{ props.title }}</h1>
  </section>
</template>
