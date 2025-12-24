import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  href?: string; // あればリンク、なければボタン
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function ButtonLink({ className, href, children, type }: Props) {
  const classes = `${styles.button} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
