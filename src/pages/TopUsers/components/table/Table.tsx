import Row from "./Row";
import styles from "./styles.module.scss";

const Table = () => {
  return (
    <div className={styles.table}>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Table;
