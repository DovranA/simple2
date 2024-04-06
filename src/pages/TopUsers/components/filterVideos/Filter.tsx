import { useState } from "react";
import styles from "./styles.module.scss";
const FilterBtns = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);
  return <div className={styles.filterBtns}></div>;
};

export default FilterBtns;
