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
          <meta name="title" content="Menfess — OSIS/MPK" />
          <meta
            name="description"
            content="Menfess App by OSIS/MPK SMK TI AL-Asiyah"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://menfess-osis-mpk.vercel.app/"
          />
          <meta property="og:title" content="Menfess — OSIS/MPK" />
          <meta
            property="og:description"
            content="Menfess App by OSIS/MPK SMK TI AL-Asiyah"
          />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/raf-ar.appspot.com/o/raf%2FImageSite%2Fmenfess-web.jpeg?alt=media&token=f695b536-3347-48d4-abf4-9d4cb465f67e"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://menfess-osis-mpk.vercel.app/"
          />
          <meta property="twitter:title" content="Menfess — OSIS/MPK" />
          <meta
            property="twitter:description"
            content="Menfess App by OSIS/MPK SMK TI AL-Asiyah"
          />
          <meta
            property="twitter:image"
            content="https://firebasestorage.googleapis.com/v0/b/raf-ar.appspot.com/o/raf%2FImageSite%2Fmenfess-web.jpeg?alt=media&token=f695b536-3347-48d4-abf4-9d4cb465f67e"
          />
          <link rel="canonical" href="https://menfess-osis-mpk.vercel.app/" />
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
