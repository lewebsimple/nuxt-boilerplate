<template>
  <div id="characters" class="grid grid-cols-4 gap-8">
    <div v-for="character in characters" :key="character.id">
      <img :src="character.image" class="" />
      <div class="name">
        {{ character.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import query from "~/graphql/characters.query.gql";

export default defineComponent({
  data() {
    return {
      characters: [],
    };
  },
  async fetch() {
    const { data } = await this.$nuxt.context.$villus.executeQuery({ query });
    this.characters = data.characters.results;
  },
});
</script>
