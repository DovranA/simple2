import { useEffect } from "react";
import Row from "../../../../components/RankTable/Row";
import { UserProfile } from "../../../../types/topUsers";
import styles from "./styles.module.scss";

type Props = {
  icons: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  active: number;
  data: UserProfile[];
};

const Table = ({ icons, active, data }: Props) => {
  const point = () => {
    switch (active) {
      case 0:
        return "total_video_likes";
      case 1:
        return "total_video_views";
      case 2:
        return "point";
      default:
        return "total_video_likes";
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
          img={item.avatar}
          point={item[point()]}
        />
      ))}
    </div>
  );
};

export default Table;
