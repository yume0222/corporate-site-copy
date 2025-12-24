import styles from "./index.module.css";

type Props = {
  type: string;
  name: string;
  id: string;
  className?: string;
}

export default function InputText({ type, name, id, className }: Props) {
  return (
    <input type={type} name={name} id={id} className={`${styles.inputText} ${className}`} />
  )
}