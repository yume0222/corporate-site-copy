import ContactForm from "../_components/ContactForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <p className={styles.text}>
        <span>Webサイトの制作のご依頼やお見積りなど、</span>
        <span>お気軽にご相談ください。</span>
      </p>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </>
  );
}
