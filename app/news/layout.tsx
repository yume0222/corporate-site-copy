import CTA from "../_components/CTA";
import Sheet from "../_components/Sheet";
import SheetStyles from "../_components/Sheet/index.module.css";
import SubHero from "../_components/SubHero";
import { BreadcrumbItem } from "@/app/_libs/microcms";
import Breadcrumbs from "@/app/_components/Breadcrumb";
import { getCategoryDetail, getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export const metadata = {
  title: 'お知らせ',
};

type Props = {
  children: React.ReactNode;
  breadcrumbItems?: BreadcrumbItem[];
  params: {
    id?: string;
    slug?: string;
  };
};

export const revalidate = 60;

const baseBreadcrumbs: BreadcrumbItem[] = [
  { label: "home", href: "/" },
  { label: "news", href: "/news" },
];

export default async function NewsLayout({ children, params }: Props) {
  let breadcrumbItems: BreadcrumbItem[] = [];

  if (params?.id) {
    const category = await getCategoryDetail(params.id).catch(notFound);
    breadcrumbItems = [
      { label: "カテゴリー", href: "/category" },
      { label: `${category.name}の一覧` },
    ];
  }
  if (params?.slug) {
    const data = await getNewsDetail(params.slug).catch(notFound);
    breadcrumbItems = [{ label: data.title }];
  }

  return (
    <>
      <SubHero title="news" sub="お知らせ" />
      <Breadcrumbs items={[...baseBreadcrumbs, ...breadcrumbItems]} />
      <Sheet innerClassName={SheetStyles.newsInner}>{children}</Sheet>
      <div className={styles.mt}>
        <CTA />
      </div>
    </>
  );
}
