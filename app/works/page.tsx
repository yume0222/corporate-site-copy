import Card from "../_components/Card";
import { getWorksList } from "../_libs/microcms";

export default async function Page() {
  const { contents: works } = await getWorksList();
  return <Card works={works} />;
}
