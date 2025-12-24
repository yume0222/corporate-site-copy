import CTA from "../_components/CTA";
import SubHero from "../_components/SubHero";
import Breadcrumbs from "@/app/_components/Breadcrumb";
import { BreadcrumbItem } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export const metadata = {
  title: '私たちについて',
};

type Props = {
  children: React.ReactNode;
};

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "home", href: "/" },
  { label: "company" },
];

export default function RootLayout({ children }: Props) {
  return (
    <>
      <SubHero title="company" sub="私たちについて" />
      <Breadcrumbs items={breadcrumbItems} />
      {children}
      <div className={styles.mt}>
        <CTA />
      </div>
    </>
  );
}
