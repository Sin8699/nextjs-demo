import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req, pathname } = ctx;
    const initialProps = await Document.getInitialProps(ctx);

    const type = pathname.includes("/blog") ? "article" : "website";
    const url = pathname.includes("/blog")
      ? pathname === "/blog"
        ? "https://keystone-5.herokuapp.com/blog"
        : "https://keystone-5.herokuapp.com/blog/123"
      : "https://keystone-5.herokuapp.com";
    return {
      ...initialProps,
      type,
      url
    };
  }

  render() {
    const { type, url } = this.props;
    return (
      <Html lang="en" preload="true">
        <Head preload="true">
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
            name="viewport"
          />
          <meta property="og:type" content={type} />
          <meta property="og:url" key="url" content={`${url}`} />
          <meta
            property="og:description"
            content="Fastest and Simplest way to build your mobile apps without coding knowledge"
          />
          <meta property="og:title" key="title" content="DOCUMENT" />
          <meta
            property="og:image"
            key="image"
            content="https://res.cloudinary.com/ddh33aomk/image/upload/v1584438250/BlogDetail/Xu%20h%C6%B0%E1%BB%9Bng%20App%20mobile/ai_b5zciv.jpg"
          />
          <meta property="og:image:width" content="768" />
          <meta property="og:image:height" content="772" />
          <noscript>
            <meta
              property="og:image"
              content="https://nevable02.s3-ap-southeast-1.amazonaws.com/images/facebook-share.jpg"
            />
          </noscript>
          <noscript>
            <meta property="og:title" content={"no script"} />
          </noscript>
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
