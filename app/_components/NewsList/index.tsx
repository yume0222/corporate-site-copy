import { News } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Link from "next/link";
import Date from "../Date";
import Category from "../Category";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  return (
    <ul className={styles.list}>
      {news.map((article) => (
        <li key={article.id} className={styles.item}>
          <div className={styles.inner}>
            <div className={styles.meta}>
              <Date date={article.publishedAt ?? article.createdAt} />
              <Category category={article.category} />
            </div>
            <Link href={`news/${article.id}`} className={styles.link}>
              <p className={styles.text}>{article.title}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
