<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <header />
    <main class="flex-grow">
      <slot />
    </main>
    <footer />
  </div>
</template>
