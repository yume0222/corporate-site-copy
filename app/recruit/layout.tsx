import CTA from "../_components/CTA";
import Sheet from "../_components/Sheet";
import SubHero from "../_components/SubHero";
import styles from "./page.module.css";
import Breadcrumbs from "@/app/_components/Breadcrumb";
import { BreadcrumbItem } from "@/app/_libs/microcms";

export const metadata = {
  title: '採用情報',
};

type Props = {
  children: React.ReactNode;
};

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "home", href: "/" },
  { label: "recruit" },
];

export default function RootLayout({ children }: Props) {
  return (
    <>
      <SubHero title="recruit" sub="採用情報" />
      <Breadcrumbs items={breadcrumbItems} />
      <div className={styles.bg}>
        <Sheet withInner={false}>{children}</Sheet>
      </div>
      <div className={styles.mt}>
        <CTA />
      </div>
    </>
  );
}
