import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

const SEO = ({
  title,
  description = "Tyler Hudson Portfolio - Tech Engineer, Gaming Creator, Christian Ministry",
  image = "/og-image.png",
  url = "https://tkhudson.github.io",
  type = 'website',
  structuredData
}: SEOProps) => {
  const fullTitle = title ? `${title} | Tyler Hudson` : 'Tyler Hudson Portfolio';
  const fullUrl = url.startsWith('http') ? url : `${url}${url === '/' ? '' : url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Tyler Hudson, Persevus, Serviam, portfolio, tech, gaming, ministry, cybersecurity, network administration" />
      <meta name="author" content="Tyler Hudson" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Tyler Hudson Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />

      {/* Additional meta */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
