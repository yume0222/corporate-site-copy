import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function TitleLevel3({ children, className }: Props) {
  return (
    <h3 className={`${styles.title} ${className}`}>{children}</h3>
  )
}
