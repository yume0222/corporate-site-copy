import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  /** section を使うか（デフォルト true） */
  withSection?: boolean;
  /** inner を使うか（デフォルト true） */
  withInner?: boolean;
  /** section に追加するクラス */
  sectionClassName?: string;
  /** inner に追加するクラス */
  innerClassName?: string;
};

export default function Sheet({
  children,
  withSection = true,
  withInner = true,
  sectionClassName = "",
  innerClassName = "",
}: Props) {
  let content = children;

  if (withInner) {
    content = (
      <div className={`${styles.inner} ${innerClassName}`}>{content}</div>
    );
  }

  if (withSection) {
    content = (
      <div className={`${styles.section} ${sectionClassName}`}>{content}</div>
    );
  }

  return <>{content}</>;
}
