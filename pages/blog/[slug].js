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
        <meta
          property="og:image"
          key="image"
          content="https://res.cloudinary.com/ddh33aomk/image/upload/v1584438250/BlogDetail/Xu%20h%C6%B0%E1%BB%9Bng%20App%20mobile/ai_b5zciv.jpg"
        />
        <meta property="og:title" key="title" content="AI MACHINE" />
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
