"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";
import InputText from "../InputText";
import Textarea from "../Textarea";
import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);
  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="lastname">
          お名前
          <span className={styles.required}>*必須</span>
        </label>
        <InputText
          className={styles.textfield}
          type="text"
          id="lastname"
          name="lastname"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
          <span className={styles.required}>*必須</span>
        </label>
        <InputText
          className={styles.textfield}
          type="text"
          id="company"
          name="company"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
          <span className={styles.required}>*必須</span>
        </label>
        <InputText
          className={styles.textfield}
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="phone">
          電話番号
          <span className={styles.note}>（半角数字ハイフンなし）</span>
        </label>
        <InputText
          className={styles.textfield}
          type="text"
          id="phone"
          name="phone"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          お問い合わせ内容
        </label>
        <Textarea className={styles.textarea} id="message" name="message" />
      </div>
      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <div className={styles.button}>
          <ButtonLink type="submit" className={ButtonLinkStyles.buttonCenter}>
            送信する
          </ButtonLink>
        </div>
      </div>
    </form>
  );
}
