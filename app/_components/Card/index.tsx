import Image from "next/image";
import styles from "./index.module.css";
import { Works } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  works: Works[];
};

export default function Card({ works }: Props) {
  return (
    <ul className={styles.list}>
      {works.map((work, index) => (
        <li className={styles.item} key={index}>
          <Link href={"work.url"} className={styles.link}>
            <Image
              className={styles.image}
              src={work.thumbnail.url}
              alt=""
              width={work.thumbnail.width}
              height={work.thumbnail.height}
            />
            <div className={styles.caption}>{work.caption}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
