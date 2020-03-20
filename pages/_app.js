// import App from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps, pathname }) {
  console.log("pathname: ", pathname);
  return (
    <>
      <Head>
        {pathname === "/blog" ? (
          <>
            {" "}
            <meta property="og:title" content={"Appfast"} />
            <meta
              property="og:image"
              content={
                "https://res.cloudinary.com/kolorlife/image/upload/v1583924517/Kolorlife/5e68c523bef1f00023e9bd25.jpg"
              }
            />
            <meta property="og:type" content={"website"} />
          </>
        ) : (
          <>
            <meta property="og:title" content={"Appfast - TEST JDON"} />
            <meta property="og:type" content={"article"} />
            <meta
              property="og:image"
              content="https://nevable02.s3-ap-southeast-1.amazonaws.com/images/facebook-share.jpg"
            ></meta>
          </>
        )}
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
