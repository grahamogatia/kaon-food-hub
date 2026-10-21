import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/site";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
}

const SITE_URL = "https://pistacentralexpress.vercel.app";

export function SEO({
  title,
  description = siteConfig.description,
  path = "/",
  type = "website",
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_PH" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#E53E3E" />
    </Helmet>
  );
}
