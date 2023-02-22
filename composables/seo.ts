interface SeoOptions {
  title?: string;
  description?: string;
  language?: "fr-CA" | "en-US";
}

export function useSeo({ title, description, language }: SeoOptions) {
  const { siteName, siteDescription, siteLanguage } = useRuntimeConfig().public;
  useServerSeoMeta({
    titleTemplate: (title) => (title ? `${title} | ${siteName}` : siteName),
    title,
    description: description || siteDescription,
    ogTitle: title,
    ogDescription: description || siteDescription,
  });
  useHead({ htmlAttrs: { lang: language || siteLanguage } });
}
