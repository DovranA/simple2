import { BsPlayFill } from "react-icons/bs";
import styles from "./styles.module.scss";
import { LuEye } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import LikeBtn from "../Like/LikeBtn";
import { TopVideo } from "../../types/topUsers";
import moment from "moment";

type Props = {
  style: any;
  info: TopVideo;
};
const Card = ({ style, info }: Props) => {
  return (
    <div className={`${styles.cardContain}`} style={style}>
      <div className={styles.btn}>
        <BsPlayFill className={styles.icon} />
        <div className={styles.blur}></div>
      </div>
      <img src={info.image_path} alt="" />
      <div className={styles.info}>
        <p>{info.title}</p>
        <div className={style.about}>
          <span className={styles.date}>
            {moment(info.created_at).format("DD-MM-YYYY")}
          </span>
          <span className={styles.counts}>
            <span>
              <LuEye size={23} />
              {info.view_count}
            </span>
            <span>
              <LikeBtn /> {info.like_count}
            </span>
            <span>
              <FiDownload size={23} /> {info.download_count}
            </span>
          </span>
        </div>
      </div>
      <span className={styles.bg}></span>
    </div>
  );
};

export default Card;
