import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req } = ctx;
    const initialProps = await Document.getInitialProps(ctx);
    let fullUrl;
    if (req) {
      fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    } else {
      fullUrl =
        window.location.protocol +
        "//" +
        window.location.hostname +
        (window.location.port ? ":" + window.location.port : "");
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
            property="og:title"
            content={
              isBlog ? "blog-test" : "Appfast - Mobile app creator platform"
            }
          />
          <meta
            property="og:image"
            content={
              isBlog
                ? "https://res.cloudinary.com/kolorlife/image/upload/c_fill,h_245,w_570/v1583924517/Kolorlife/5e68c523bef1f00023e9bd25.jpg"
                : "https://nevable02.s3-ap-southeast-1.amazonaws.com/images/facebook-share.jpg"
            }
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
