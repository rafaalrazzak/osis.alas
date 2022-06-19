import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="OSIS | SMK-AL-ASIYAH" />
          <meta name="description" content="OSIS SMK TI AL-AL-ASIYAH" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://osis-alas.vercel.app" />
          <meta property="og:title" content="OSIS | SMK-AL-ASIYAH" />
          <meta property="og:description" content="OSIS SMK TI AL-AL-ASIYAH" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/raf-ar/image/upload/v1655638430/thumbnail/OSIS_SMK_AL-ASIYAH.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://osis-alas.vercel.app" />
          <meta property="twitter:title" content="Menfess — OSIS/MPK" />
          <meta
            property="twitter:description"
            content="OSIS SMK TI AL-AL-ASIYAH"
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/raf-ar/image/upload/v1655638430/thumbnail/OSIS_SMK_AL-ASIYAH.png"
          />
          <link rel="canonical" href="https://osis-alas.vercel.app" />
          <link rel="shortcut icon" href="/static/logo-osis.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
