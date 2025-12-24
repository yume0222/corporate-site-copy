import CTA from "../_components/CTA";
import Sheet from "../_components/Sheet";
import SheetStyles from "../_components/Sheet/index.module.css";
import SubHero from "../_components/SubHero";
import Breadcrumbs from "@/app/_components/Breadcrumb";
import { BreadcrumbItem } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export const metadata = {
  title: 'お問い合わせ',
};

type Props = {
  children: React.ReactNode;
};

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "home", href: "/" },
  { label: "contact" },
];

export default function RootLayout({ children }: Props) {
  return (
    <>
      <SubHero title="contact" sub="お問い合わせ" />
      <Breadcrumbs items={breadcrumbItems} />
      <Sheet innerClassName={SheetStyles.contactInner}>{children}</Sheet>
      <div className={styles.mt}>
        <CTA />
      </div>
    </>
  );
}
