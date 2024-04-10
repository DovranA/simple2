import { MdOutlinePlaylistAdd } from "react-icons/md";
import styles from "./styles.module.scss";
const FilterNav = () => {
  return (
    <div className={styles.navbar}>
      <h3>Brendlar (500700)</h3>
      <span>
        <MdOutlinePlaylistAdd size={24} />
        <div className={styles.filterDiv}>
          <ul>
            <li>A-Z boyunca</li>
            <li>Z-A boyunca</li>
            <li>Wideo sany ulydan kica</li>
            <li>Wideo sany kiciden ula</li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export default FilterNav;
