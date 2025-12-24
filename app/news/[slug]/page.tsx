import { getNewsDetail, BreadcrumbItem } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";
import Link from "next/link";
import SnsShareButtons from "@/app/_components/SnsShareButtons";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  const pageUrl = "https://example.com"; // ← 実際の URL にする
  return (
    <>
      <Article data={data} />
      <ul className={styles.postList}>
        <li className={styles.postItem}>
          <Link href="/">Web Conference様のサイトを制作いたしました</Link>
        </li>
        <li className={styles.postItem}>
          <Link href="/">プライバシーマーク取得のお知らせ</Link>
        </li>
      </ul>
      <div className={styles.newsLink}>
        <Link href="/news" className={styles.link}>
          news一覧
        </Link>
      </div>
      <SnsShareButtons url={pageUrl} />
    </>
  );
}
