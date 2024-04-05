import styles from "./styles.module.scss";
import { IoAppsOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";

type Props = {
  density: boolean;
  setDensity: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopCards = ({ density, setDensity }: Props) => {
  return (
    <nav>
      <h3>Ahlisi(123456)</h3>
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
      </div>
    </nav>
  );
};

export default TopCards;
