import { useState } from "react";
import styles from "./styles.module.scss";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoAppsOutline } from "react-icons/io5";
const VideoCards = () => {
  const [density, setDensity] = useState<boolean>(true);
  return (
    <div className={styles.content}>
      <nav>
        <h3>Ahlisi(123456)</h3>
        <div>
          <button className={density ? styles.active : ""}>
            <IoAppsOutline color={density ? "white" : "black"} size={24} />
          </button>
          <button className={density ? "" : styles.active}>
            <AiOutlineAppstore color="black" size={24} />
          </button>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default VideoCards;
