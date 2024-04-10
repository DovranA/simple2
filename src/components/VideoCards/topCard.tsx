import styles from "./styles.module.scss";
import { IoAppsOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";

type Props = {
  density: number;
  setDensity: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  button?: string;
  buttonClick?: () => void;
};

const TopCards = ({
  density,
  setDensity,
  title,
  button,
  buttonClick,
}: Props) => {
  return (
    <nav>
      <h2>{title}</h2>
      <div>
        <button
          onClick={() => setDensity(4)}
          className={density === 4 ? styles.active : ""}
        >
          <IoAppsOutline color={density === 4 ? "white" : "black"} size={24} />
        </button>
        <button
          onClick={() => setDensity(2)}
          className={density === 2 ? styles.active : ""}
        >
          <AiOutlineAppstore
            color={density === 2 ? "white" : "black"}
            size={24}
          />
        </button>
        {button && (
          <button className={styles.button} onClick={buttonClick}>
            {button}
          </button>
        )}
      </div>
    </nav>
  );
};

export default TopCards;
