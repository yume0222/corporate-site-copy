import CTA from "../_components/CTA";
import Sheet from "../_components/Sheet";
import SheetStyles from "../_components/Sheet/index.module.css";
import SubHero from "../_components/SubHero";
import Breadcrumbs from "@/app/_components/Breadcrumb";
import { BreadcrumbItem } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export const metadata = {
  title: 'お知らせ',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "home", href: "/" },
  { label: "news", href: "/news" },
];

export default function RootLayout({ children }: Props) {
  return (
    <>
      <SubHero title="news" sub="お知らせ" />
      <Breadcrumbs items={breadcrumbItems} />
      <Sheet innerClassName={SheetStyles.newsInner}>{children}</Sheet>
      <div className={styles.mt}>
        <CTA />
      </div>
    </>
  );
}
