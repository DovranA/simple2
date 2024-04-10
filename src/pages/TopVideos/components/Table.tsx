import Row from "../../../components/RankTable/Row";
import { TopVideo } from "../../../types/topUsers";
import styles from "./styles.module.scss";

type Props = {
  icons: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  active: number;
  data: TopVideo[];
};

const Table = ({ icons, active, data }: Props) => {
  const point = () => {
    switch (active) {
      case 0:
        return "like_count";
      case 1:
        return "share_count";
      case 2:
        return "download_count";
      default:
        return "like_count";
    }
  };
  return (
    <div className={styles.table}>
      {data.map((item, index) => (
        <Row
          index={index + 1}
          key={item.id}
          active={active}
          icons={icons}
          name={item.username}
          img={item.image_path}
          point={item[point()]}
        />
      ))}
    </div>
  );
};

export default Table;
