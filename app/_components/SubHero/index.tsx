import Heading from "../Heading";
import HeadingStyles from "../Heading/index.module.css";
import styles from "./index.module.css";

type Props = {
  title: string;
  sub: string;
};

export default function SubHero({ title, sub }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
      <Heading className={`${HeadingStyles.headingCenter} ${HeadingStyles.headingWhite}`} title={title} sub={sub} />
      </div>
    </div>
  );
}
