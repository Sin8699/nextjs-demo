import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req } = ctx;
    const initialProps = await Document.getInitialProps(ctx);
    let fullUrl;
    if (req) {
      const protocol = req.headers["x-forwarded-proto"] || "http";
      fullUrl = req ? `${protocol}://${req.headers.host}` : "";
      // fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    } else {
      fullUrl = "";
    }
    return {
      ...initialProps,
      fullUrl,
      isBlog: fullUrl.includes("/blog")
    };
  }

  render() {
    const { fullUrl, isBlog } = this.props;
    return (
      <Html lang="en" preload="true">
        <Head preload="true">
          <meta
            property="og:url"
            content={`https://keystone-5.herokuapp.com/`}
          />
          <meta property="og:type" content={"website"} />
          <meta
            property="og:image"
            content="https://nevable02.s3-ap-southeast-1.amazonaws.com/images/facebook-share.jpg"
          ></meta>
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
