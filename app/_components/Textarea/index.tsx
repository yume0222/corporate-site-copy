import styles from "./index.module.css";

type Props = {
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
}

export default function Textarea({ name, placeholder, id, className }: Props) {
  return (
    <textarea name={name} id={id} placeholder={placeholder} className={`${styles.textarea} ${className}`} />
  )
}