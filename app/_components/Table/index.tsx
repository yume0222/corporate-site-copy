import { TableRow } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  tables: TableRow[];
};

export default function Table({ tables }: Props) {
  return (
    <table className={styles.table}>
      <tbody>
        {tables.map((table, index) => (
          <tr key={index} className={styles.row}>
            <th className={styles.header}>{table.header}</th>
            <td className={styles.data}>
              {Array.isArray(table.data.text) ? (
                <p>
                  {table.data.text.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </p>
              ) : (
                <p>{table.data.text}</p>
              )}
              <ul className={styles.list}>
                {table.data.list?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
