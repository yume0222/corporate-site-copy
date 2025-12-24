import { Service } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  services: Service[];
  listClassName?: string;
  itemClassName?: string;
  titleClassName?: string;
};

export default function Media({ services, listClassName, itemClassName, titleClassName }: Props) {
  return (
    <ul className={`${styles.list} ${listClassName}`}>
      {services.map((service) => (
        <li className={`${styles.item} ${itemClassName}`} key={service.id}>
          <Image
            className={styles.image}
            src={service.image.url}
            alt={service.image.alt}
            width={445}
            height={280}
          />
          <div className={styles.body}>
            <h3 className={`${styles.title} ${titleClassName}`}>{service.title}</h3>
            <p className={styles.text}>
              {service.text.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
