<script setup lang="ts">
useSchemaOrg([defineOrganization({ name: "Websimple" }), defineWebSite({ name: "Nuxt boilerplate" }), defineWebPage()]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
