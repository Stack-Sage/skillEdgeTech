export function defaultSEO(siteContent = {}) {
  const title = siteContent.seo?.title || siteContent.title || siteContent.companyName || "SkillEdge";
  const description = siteContent.seo?.description || siteContent.tagline || siteContent.about || "";
  const url = siteContent.seo?.url || siteContent.url || "http://localhost:3000";
  const image = siteContent.seo?.ogImage || siteContent.ogImage || siteContent.logo || `${url}/og-image.png`;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: { cardType: "summary_large_image" },
  };
}
