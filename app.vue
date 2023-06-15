<script setup lang="ts">
const { siteName, siteDescription } = useRuntimeConfig().public;
useHead({ titleTemplate: (title) => (title ? `${title} | ${siteName}` : siteName) });

useSchemaOrg([
  defineOrganization({
    name: "Websimple",
    "@type": "Organization",
  }),
  defineWebSite({ name: siteName, description: siteDescription }),
]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
