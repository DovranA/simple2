import { PinnedVideos } from "../../types/home";
import { TopVideo } from "../../types/topUsers";
import Card from "./VidCard";
import styles from "./styles.module.scss";

type Props = {
  children: any;
  density: number;
  data: TopVideo[];
};

const VideoCards = ({ children, density, data }: Props) => {
  return (
    <div className={styles.content}>
      {children}
      <div
        className={styles.cards}
        style={{
          gridTemplateColumns: `repeat(${density}, minmax(0, 1fr))`,
        }}
      >
        {data.map((item) => (
          <Card
            info={item}
            key={item.id}
            style={{ height: `${density === 4 ? 30 : 60}vh` }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCards;
