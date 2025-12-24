import TitleLevel3 from "../_components/TitleLevel3";
import TitleLevel3Styles from "../_components/TitleLevel3/index.module.css";
import styles from "./page.module.css";
import { TableRow } from "../_libs/microcms";
import Table from "../_components/Table";
import ButtonLink from "../_components/ButtonLink";
import ButtonLinkStyles from "../_components/ButtonLink/index.module.css";
import Image from "next/image";
import Sheet from "../_components/Sheet";

const data: {
  contents: TableRow[];
} = {
  contents: [
    {
      header: "雇用形態",
      data: { text: "正社員" },
    },
    {
      header: "給与",
      data: { text: "400万円〜600万円（経験・能力を考慮のうえ優遇）" },
    },
    {
      header: "仕事内容",
      data: {
        text: "Webサイトの制作。サイトのデザインとコーディングを担当していただきます。",
      },
    },
    {
      header: "勤務時間",
      data: { text: "10:00 〜 19:00（実働8時間、休憩1時間）" },
    },
    {
      header: "所在地",
      data: {
        text: [
          "PhotoshopやXDなどのデザインツールの使い方を理解し、コーディングの基礎スキルがある方。",
          "実務未経験でも学校や独学で学習した方を歓迎します。",
        ],
        list: [
          "デザインやコーディングを楽しめる方",
          "常にアンテナを張って積極的にトレンドや最新の技術を取り入れる方",
          "お客様と一緒に楽しみながら高い目的を目指せる方",
        ],
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Sheet withInner={false} sectionClassName={styles.message}>
        <h3 className={styles.title}>Enjoy Creation for Client</h3>
        <p className={styles.subTitle}>楽しむ心が良いモノを生む</p>
        <div className={styles.heading}>
          <span>心を弾ましながら</span>
          <span>夢いっぱいのサイトを作ろう！</span>
          <span>お客様も自分もみんなが幸せになれるように</span>
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src="/recruit01.jpg" alt="" fill />
        </div>
      </Sheet>
      <Sheet>
        <TitleLevel3 className={TitleLevel3Styles.titleCenter}>
          募集中の職種
        </TitleLevel3>
        <div className={styles.inner}>
          <h4 className={styles.listName}>Webデザイナー</h4>
          <div className={styles.table}>
            <Table tables={data.contents} />
          </div>
          <div className={styles.button}>
            <ButtonLink className={ButtonLinkStyles.buttonCenter}>
              応募する
            </ButtonLink>
          </div>
          <p className={styles.note}>求人サイトへ遷移します</p>
        </div>
      </Sheet>
      <Sheet>
        <TitleLevel3 className={TitleLevel3Styles.titleCenter}>
          社内ムービー
        </TitleLevel3>
        <div className={styles.video}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VwbnZHvQ3CE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Sheet>
    </>
  );
}
