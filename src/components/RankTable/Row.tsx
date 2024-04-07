import styles from "./styles.module.scss";
type Props = {
  icons: React.ReactElement<any>[];
  active: number;
};

const Row = ({ icons, active }: Props) => {
  return (
    <div className={styles.row}>
      <div>
        <span>1</span>
        <span>
          <img src="/card1.png" alt="" />
        </span>
        <span>
          <p>100 Haryt</p>
        </span>
      </div>
      <span>1234 {icons[active]}</span>
    </div>
  );
};

export default Row;
