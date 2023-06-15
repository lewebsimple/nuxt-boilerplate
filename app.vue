<script setup lang="ts">
useSchemaOrg([
  defineOrganization({
    name: "Websimple",
    "@type": "Organization",
  }),
  defineWebSite({ name: "Nuxt boilerplate" }),
]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
