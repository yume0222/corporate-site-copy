// microCMSと通信処理を行う関数
import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

// パンクズリストの型定義
export type BreadcrumbItem = {
  label: string;
  href?: string; // 最後の要素などリンク不要なら省略
};

// サービスの型定義
export type Service = {
  id: string;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  text: string[];
};

// テーブルの型定義
export type TableRow = {
  header: string;
  data: {
    text: string | string[];
    list?: string[];
  };
};

// 制作実績の型定義
export type Works = {
  url?: string;
  thumbnail: MicroCMSImage;
  caption?: string;
} & MicroCMSListContent;

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSListContent;

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  heading: string;
  content: string;
  subheading: string;
  subcontent: string;
  thumbnail: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

// .env.lacalファイルに設定した環境変数を参照
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// クライアントを作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ニュース一覧を取得する関数
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

// ニュース詳細情報の取得（1つのニュース記事を取得する関数）
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
    // データ単位でキャッシュを制御
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};

// カテゴリーのコンテンツを取得する関数
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return detailData;
};

// 制作実績を取得する関数
export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: "works",
    queries,
  });
  return listData;
};

// ニュースのコンテンツを全て取得する関数
export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: 'news',
  });

  return listData;
};

// カテゴリーのコンテンツを全て取得する関数
export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: 'categories',
  });

  return listData;
};