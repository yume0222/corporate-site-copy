import CTA from "../_components/CTA";
import Sheet from "../_components/Sheet";
import SubHero from "../_components/SubHero";
import Breadcrumbs from "@/app/_components/Breadcrumb";
import { BreadcrumbItem } from "@/app/_libs/microcms";
import styles from "./page.module.css";

export const metadata = {
  title: '事業案内',
};

type Props = {
  children: React.ReactNode;
};

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "home", href: "/" },
  { label: "service" },
];

export default function RootLayout({ children }: Props) {
  return (
    <>
      <SubHero title="service" sub="事業内容" />
      <Breadcrumbs items={breadcrumbItems} />
      <Sheet>{children}</Sheet>
      <div className={styles.mt}>
        <CTA />
      </div>
    </>
  );
}
