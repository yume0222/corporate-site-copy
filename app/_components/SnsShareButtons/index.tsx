"use client";

import { useEffect } from "react";
import styles from "./index.module.css";

declare global {
  interface Window {
    FB: any;
    twttr: any;
  }
}

type Props = {
  url: string;
};

export default function SnsShareButtons({ url }: Props) {
  // Facebook
  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0";
      document.body.appendChild(script);
    }
  }, []);

  // Twitter
  useEffect(() => {
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      document.body.appendChild(script);
    }
  }, []);

  // Hatena
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://b.st-hatena.com/js/bookmark_button.js";
    document.body.appendChild(script);
  }, []);

  // LINE
  useEffect(() => {
    if (!document.getElementById("line-script")) {
      const script = document.createElement("script");
      script.id = "line-script";
      script.src =
        "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <ul className={styles.list}>
      {/* Facebook */}
      <li className={styles.item}>
        <div
          className="fb-like"
          data-href={url}
          data-layout="button_count"
          data-action="like"
          data-size="large"
          data-show-faces="false"
          data-share="true"
        ></div>
      </li>

      {/* Twitter */}
      <li className={styles.item}>
        <a
          href={`https://twitter.com/share?url=${encodeURIComponent(url)}`}
          className="twitter-share-button"
          data-size="large"
          data-show-count="false"
          data-lang="ja"
        >
          ツイート
        </a>
      </li>

      {/* Hatena */}
      <li className={styles.item}>
        <a
          href={`http://b.hatena.ne.jp/entry/${url}`}
          className="hatena-bookmark-button"
          data-hatena-bookmark-layout="basic-label"
          data-hatena-bookmark-lang="ja"
          data-hatena-bookmark-height="28"
        >
          <img
            src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="20"
            height="20"
          />
        </a>
      </li>

      {/* LINE */}
      <li className={styles.item}>
        <div
          className="line-it-button"
          data-lang="ja"
          data-type="share-c"
          data-url={url}
        ></div>
      </li>
    </ul>
  );
}
