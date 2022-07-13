import Head from "next/head";
import { useRouter } from "next/router";
import siteMetadata from "@/data/siteMetadata";

export default function SEO({ title, description, thumbnail }) {
  const router = useRouter();
  return (
    <Head>
      <title>{`${title} | OSIS SMK AL-ASIYAH`}</title>
      <meta name="robots" content="follow, index" />
      <meta
        name="description"
        content={description ? description : siteMetadata.description}
      />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta
        property="og:description"
        content={description ? description : siteMetadata.description}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={
          thumbnail
            ? thumbnail
            : `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`
        }
      />
    </Head>
  );
}
