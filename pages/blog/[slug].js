import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FacebookShareButton } from "react-share";

const BlogDetail = () => {
  const [Href, setHref] = useState(null);
  useEffect(() => {
    setHref(window.location.href);
  }, []);
  return (
    <div>
      <Head>
        <meta property="og:title" content={"blog title"} />
        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/kolorlife/image/upload/c_fill,w_830/v1583998874/Kolorlife/5e69e797bef1f00023e9bd2e.jpg"
          }
        />
      </Head>
      <div className="share">
        <FacebookShareButton url={`${Href}`} quote={`appfast`}>
          <span className="mdi mdi-facebook icon"></span>
        </FacebookShareButton>
      </div>
      <style jsx>{`
        .share {
          width: 100px;
          cursor: pointer;
          height: 100px;
          background: brown;
          margin: auto;
        }
        .react-share__ShareButton,
        button,
        .mdi {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;
