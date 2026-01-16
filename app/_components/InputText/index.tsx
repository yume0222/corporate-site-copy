import styles from "./index.module.css";

type Props = {
  type: string;
  name: string;
  id?: string;
  value?: string;
  className?: string;
}

export default function InputText({ type, name, id, value, className }: Props) {
  return (
    <input type={type} name={name} id={id} value={value} className={className} />
  )
}