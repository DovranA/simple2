import Row from "./Row";
import styles from "./styles.module.scss";

type Props = {
  icons: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  active: number;
};

const Table = ({ icons, active }: Props) => {
  return (
    <div className={styles.table}>
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
      <Row active={active} icons={icons} />
    </div>
  );
};

export default Table;
