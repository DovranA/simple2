import styles from "./styles.module.scss";
type Props = {
  icons: React.ReactElement<any>[];
  active: number;
  index: number;
  img: string;
  name: string;
  point: number;
};

const Row = ({ icons, active, index, img, name, point }: Props) => {
  return (
    <div className={styles.row}>
      <div>
        <span>{index}</span>
        <span>
          <img src={img} alt="" />
        </span>
        <span>
          <p>{name}</p>
        </span>
      </div>
      <span>
        {point}

        {icons[active]}
      </span>
    </div>
  );
};

export default Row;
