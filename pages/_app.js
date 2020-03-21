// import App from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps, pathname }) {
  const title = pathname.includes("/blog")
    ? pathname === "/blog"
      ? "Appfast"
      : "blog title"
    : "Appfast - TEST JDON";
  const type = pathname.includes("/blog") ? "article" : "website";
  const url = pathname.includes("/blog")
    ? pathname === "/blog"
      ? "https://keystone-5.herokuapp.com/blog"
      : "https://keystone-5.herokuapp.com/blog/123"
    : "https://keystone-5.herokuapp.com";
  const image = pathname.includes("/blog")
    ? pathname === "/blog"
      ? "https://res.cloudinary.com/kolorlife/image/upload/v1583924517/Kolorlife/5e68c523bef1f00023e9bd25.jpg"
      : "https://res.cloudinary.com/kolorlife/image/upload/c_fill,w_830/v1583998874/Kolorlife/5e69e797bef1f00023e9bd2e.jpg"
    : "https://nevable02.s3-ap-southeast-1.amazonaws.com/images/facebook-share.jpg";
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async appContext => {
  const { ctx } = appContext;

  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { ...pageProps, pathname: ctx.pathname };
};

export default MyApp;
