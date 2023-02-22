<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <NuxtLoadingIndicator />
    <header>
      <TheSiteHeader />
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer>
      <TheSiteFooter />
    </footer>
  </div>
</template>
