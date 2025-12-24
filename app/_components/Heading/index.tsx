import styles from "./index.module.css";

type Props = {
  title: React.ReactNode;
  sub: React.ReactNode;
  className?: string;
};

export default function Heading({ title, className, sub }: Props) {
  return (
    <h2 className={`${styles.heading} ${className}`}>
      {title}
      <span className={styles.sub}>{sub}</span>
    </h2>
  );
}
