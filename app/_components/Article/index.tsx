import { News } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Date from "../Date";
import Category from "../Category";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.meta}>
        <Date date={data.publishedAt ?? data.createdAt} />
        <Link href={`/news/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
      </div>
      <Image
        className={styles.image}
        src={data.thumbnail.url}
        alt=""
        width={data.thumbnail.width}
        height={data.thumbnail.height}
      />
      <p className={styles.desc}>{data.description}</p>
      <h3 className={styles.heading}>{data.heading}</h3>
      <p
        className={styles.text01}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
      <h4 className={styles.subHeading}>{data.subheading}</h4>
      <p
        className={styles.text02}
        dangerouslySetInnerHTML={{
          __html: data.subcontent,
        }}
      />
    </>
  );
}
