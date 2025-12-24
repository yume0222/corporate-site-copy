import styles from "./index.module.css";

type Props = {
  name: string;
  id: string;
  className?: string;
}

export default function Textarea({ name, id, className }: Props) {
  return (
    <textarea name={name} id={id} className={`${styles.textarea} ${className}`} />
  )
}