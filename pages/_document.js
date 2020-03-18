import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps
    };
  }

  render() {
    return (
      <Html lang="en" preload="true">
        <Head preload="true">
          <meta
            property="og:url"
            content={`https://keystone-5.herokuapp.com/`}
          />
          <meta property="og:type" content={"website"} />
          <meta
            property="og:title"
            content="Appfast - Mobile app creator platform"
          />
          <meta
            property="og:image"
            content="https://nevable02.s3-ap-southeast-1.amazonaws.com/images/facebook-share.jpg"
          />
          <meta
            property="og:description"
            content="Fastest and Simplest way to build your mobile apps without coding knowledge"
          />
          <meta property="og:image:width" content="768" />
          <meta property="og:image:height" content="772" />
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
