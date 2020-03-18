import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FacebookShareButton } from "react-share";

const Blog = () => {
  const [Href, setHref] = useState(null);
  useEffect(() => {
    setHref(window.location.href);
  }, []);
  return (
    <div>
      <Head>
        <title>BLOG</title>
      </Head>
      <div className="share">
        <FacebookShareButton url={`${Href}`} quote={`appfast`}>
          <span className="mdi mdi-facebook icon"></span>
        </FacebookShareButton>
      </div>
      <div className="hero">BLOG</div>
      <style jsx>{`
        .share {
          width: 100px;
          cursor: pointer;
          height: 100px;
          background: brown;
          margin: auto;
        }
        button {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Blog;
