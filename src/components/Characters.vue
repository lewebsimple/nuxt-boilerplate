<template>
  <div id="characters">...</div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import query from "~/graphql/characters.query.gql";

export default defineComponent({
  async fetch() {
    const result = await this.$villus.executeQuery({ query });
    console.log(result);
  },
});
</script>
