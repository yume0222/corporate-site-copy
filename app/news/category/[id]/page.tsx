import { getCategoryDetail, getNewsList, BreadcrumbItem } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p className={styles.text}>{category.name}の一覧</p>
      <NewsList news={news} />
      <div className={styles.pagination}>
        <Pagination
          totalCount={totalCount}
          basePath={`/news/category/${category.id}`}
        />
      </div>
    </>
  );
}
