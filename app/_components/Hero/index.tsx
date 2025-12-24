import styles from "./index.module.css";
import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.title}>WEB DESIGN SPECIALIST</h1>
          <p className={styles.sub}>
            <span>お客様の夢を叶える</span>
            <span>Webサイトを制作</span>
          </p>
          <div className={styles.button}>
            <ButtonLink
              href="/contact"
              className={`${ButtonLinkStyles.buttonTransparent} ${ButtonLinkStyles.buttonCenterDesktop}`}
            >
              contact
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
