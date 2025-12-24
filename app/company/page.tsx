import Image from "next/image";
import TitleLevel3 from "../_components/TitleLevel3";
import TitleLevel3Styles from "../_components/TitleLevel3/index.module.css";
import styles from "./page.module.css";
import { TableRow } from "../_libs/microcms";
import Table from "../_components/Table";
import Sheet from "../_components/Sheet";

const data: {
  contents: TableRow[];
} = {
  contents: [
    {
      header: "社名",
      data: { text: "株式会社PON DESIGN" },
    },
    {
      header: "設立",
      data: { text: "2025.02.10" },
    },
    {
      header: "代表取締役",
      data: { text: "猫山ポン太郎" },
    },
    {
      header: "資本金",
      data: { text: "	1,000,000円" },
    },
    {
      header: "所在地",
      data: { text: "〒555-5555 東京都千代田区 ポンビルディング 606" },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Sheet sectionClassName={styles.bg}>
        <TitleLevel3 className={TitleLevel3Styles.titleCenter}>
          メッセージ
        </TitleLevel3>
        <div className={styles.message}>
          <div className={styles.heading}>
            <span>サイトのゴール = </span>
            <span>夢を叶えること</span>
          </div>
          <div className={styles.headingText}>
            <span>お客様の夢を叶えること。</span>
            <span>それがWebサイトのゴールであり、私たちが目指すことです。</span>
            <span>
              だからこそちゃんと成果を出すサイトを全力でお作りします。
            </span>
            <span>お客様の笑顔を見たい。</span>
            <span>夢を実現する手助けをさせてください。</span>
          </div>
        </div>
        <div className={styles.greeting}>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src="/ceo.jpg" alt="" fill />
          </div>
          <p className={styles.greetingText}>
            <span>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </span>
            <span>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </span>
            <span>代表取締役社長 猫山ポン太郎</span>
          </p>
        </div>
      </Sheet>
      <Sheet>
        <TitleLevel3 className={TitleLevel3Styles.titleCenter}>
          会社概要
        </TitleLevel3>
        <div className={styles.table}>
          <Table tables={data.contents} />
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.6509089586225!2d139.76706579999998!3d35.681299599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1757122553791!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={styles.mapLink}>
            <a
              href="https://maps.app.goo.gl/UnVvbn6VBvCeFbZ16"
              target="_blank"
              className={styles.link}
            >
              Google mapで見る
            </a>
          </div>
        </div>
      </Sheet>
    </>
  );
}
