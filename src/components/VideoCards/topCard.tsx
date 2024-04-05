import styles from "./styles.module.scss";
import { IoAppsOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";

type Props = {
  density: boolean;
  setDensity: React.Dispatch<React.SetStateAction<boolean>>;
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
      <h3>{title}</h3>
      <div>
        <button
          onClick={() => setDensity(true)}
          className={density ? styles.active : ""}
        >
          <IoAppsOutline color={density ? "white" : "black"} size={24} />
        </button>
        <button
          onClick={() => setDensity(false)}
          className={density ? "" : styles.active}
        >
          <AiOutlineAppstore color={density ? "black" : "white"} size={24} />
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
