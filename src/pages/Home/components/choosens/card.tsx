import PlayBtn from "../../../../components/PlayBtn/PlayBtn";
import { Saylanan } from "../../../../types/home";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
type Props = {
  info: Saylanan;
};
const Card = ({ info }: Props) => {
  return (
    <div className={styles.card}>
      <div>
        <span>
          <i className="bi bi-file-earmark-play"></i>
          <p>{info.video_count}</p>
        </span>
        <PlayBtn />
      </div>
      <motion.img
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5, type: "tween" }}
        src={info.image}
        alt=""
      />
    </div>
  );
};

export default Card;
