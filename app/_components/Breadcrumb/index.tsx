import styles from "./index.module.css";
import Link from "next/link";
import { BreadcrumbItem } from "@/app/_libs/microcms";
import Sheet from "../Sheet";

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className={styles.container}>
      <Sheet withSection={false}>
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const key = item.href ?? item.label ?? index;

            return (
              <li key={key} className={styles.item}>
                {index !== 0 && (
                  <span aria-hidden="true" className={styles.gt}>
                    &gt;
                  </span>
                )}
                {isLast || !item.href ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={styles.notCurrent}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Sheet>
    </nav>
  );
}
