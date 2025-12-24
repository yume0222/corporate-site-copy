import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./_components/Hero";
import Sheet from "./_components/Sheet";
import Heading from "./_components/Heading";
import HeadingStyles from "./_components/Heading/index.module.css";
import NewsList from "./_components/NewsList";
import { TOP_NEWS_LIMIT, TOP_WORKS_LIMIT } from "./_constants";
import { getNewsList, Service, getWorksList } from "@/app/_libs/microcms";
import Media from "./_components/Media";
import ButtonLink from "./_components/ButtonLink";
import ButtonLinkStyles from "./_components/ButtonLink/index.module.css";
import CTA from "./_components/CTA";
import Slider from "./_components/Slider";

const service: {
  contents: Service[];
} = {
  contents: [
    {
      id: "1",
      image: {
        url: "/service01.jpg",
        alt: "サービス1",
      },
      title: "Webサイト制作",
      text: [
        "新規サイトはもちろん、サイトリニューアルやランディングページ制作も承っております。",
      ],
    },
    {
      id: "2",
      image: {
        url: "/service02.jpg",
        alt: "サービス2",
      },
      title: "Webサイト運用",
      text: [
        "サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案が可能です。",
      ],
    },
    {
      id: "3",
      image: {
        url: "/service03.jpg",
        alt: "サービス3",
      },
      title: "アプリ開発",
      text: [
        "スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。",
      ],
    },
  ],
};

export default async function Home() {
  const { contents: news } = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  const { contents: works } = await getWorksList({
    limit: TOP_WORKS_LIMIT,
  });

  return (
    <>
      {/* newsSection */}
      <Hero />
      <Sheet innerClassName={styles.newsInner}>
        <Heading
          title="news"
          sub="お知らせ"
          className={HeadingStyles.headingCenterSp}
        />
        <div className={styles.newsList}>
          <NewsList news={news} />
        </div>
      </Sheet>
      {/* serviceSection */}
      <Sheet>
        <div className={styles.heading}>
          <Heading
            title="service"
            sub="事業内容"
            className={HeadingStyles.headingCenter}
          />
        </div>
        <Media services={service.contents} />
        <div className={styles.button}>
          <ButtonLink href="/service" className={ButtonLinkStyles.buttonCenter}>
            more
          </ButtonLink>
        </div>
      </Sheet>
      {/* worksSection */}
      <Sheet sectionClassName={styles.works} innerClassName={styles.worksInner}>
        <div className={styles.slider}>
          <Slider images={works} />
        </div>
        <div className={styles.worksBody}>
          <div className={styles.heading}>
            <Heading
              title="works"
              sub="制作実績"
              className={HeadingStyles.headingCenter}
            />
          </div>
          <p className={styles.worksText}>
            <span>様々なジャンルのWebサイト制作が可能です。</span>
            <span>ご購入やお申込み数の増加などを実現します！</span>
          </p>
          <div className={styles.button}>
            <ButtonLink href="/works" className={ButtonLinkStyles.buttonCenter}>
              more
            </ButtonLink>
          </div>
        </div>
      </Sheet>
      {/* companySection */}
      <Sheet
        sectionClassName={styles.company}
        innerClassName={styles.companyInner}
      >
        <div className={styles.heading}>
          <Heading
            title="company"
            sub="私たちについて"
            className={HeadingStyles.headingCenter}
          />
        </div>
        <div className={styles.companyBody}>
          <div className={styles.companyHeading}>
            <span>サイトのゴール = </span>
            <span>夢を叶えること</span>
          </div>
          <div className={styles.companyText}>
            <span>お客様の夢を叶えること。</span>
            <span>それがWebサイトのゴールであり、私たちが目指すことです。</span>
            <span>
              だからこそちゃんと成果を出すサイトを全力でお作りします。
            </span>
            <span>お客様の笑顔を見たい。</span>
            <span>夢を実現する手助けをさせてください。</span>
          </div>
          <div className={styles.button}>
            <ButtonLink href="/company" className={ButtonLinkStyles.buttonCenter}>
              more
            </ButtonLink>
          </div>
        </div>
      </Sheet>
      {/* recruitSection */}
      <Sheet innerClassName={styles.recruitInner}>
        <div className={styles.recruitImageWrapper}>
          <Image className={styles.image} src="/recruit.jpg" alt="" fill />
        </div>
        <div className={styles.recruitBody}>
          <div className={styles.heading}>
            <Heading
              title="recruit"
              sub="採用情報"
              className={HeadingStyles.headingCenter}
            />
          </div>
          <p className={styles.recruitText}>私たちと一緒に働きませんか？</p>
          <div className={styles.button}>
            <ButtonLink href="/recruit" className={ButtonLinkStyles.buttonCenter}>
              more
            </ButtonLink>
          </div>
        </div>
      </Sheet>
      <div className={styles.mt}>
        <CTA />
      </div>
    </>
  );
}
