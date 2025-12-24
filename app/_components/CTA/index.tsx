import styles from "./index.module.css";
import Heading from "../Heading";
import HeadingStyles from "../Heading/index.module.css";
import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";
import Sheet from "../Sheet";

export default function CTA() {
  return (
    <div className={styles.bg}>
      <Sheet withSection={false}>
        <Heading
          className={HeadingStyles.headingCenter}
          title="contact"
          sub="お問い合わせ"
        />
        <p className={styles.text}>
          <span>Webサイトの制作のご依頼やお見積りなど、</span>
          <span>お気軽にご相談ください。</span>
        </p>
        <div className={styles.button}>
          <ButtonLink href="/" className={ButtonLinkStyles.buttonCenter}>
            more
          </ButtonLink>
        </div>
      </Sheet>
    </div>
  );
}
