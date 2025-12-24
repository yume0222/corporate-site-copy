import NewsList from "../_components/NewsList";
import { getNewsList, BreadcrumbItem } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "../_components/Pagination";
import styles from "./page.module.css";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <NewsList news={news} />
      <div className={styles.pagination}>
        <Pagination totalCount={totalCount} />
      </div>
    </>
  );
}
