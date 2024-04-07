import { useAppSelector } from "../../../../app/hooks";
import { SelectHomeData } from "../../../../features/homeSlice";
import Card from "./card";
import styles from "./style.module.scss";
const Choosens = () => {
  const data = useAppSelector(SelectHomeData);
  console.log(data);

  return (
    <div className={styles.container}>
      <nav>
        <h2>Sayalannalar</h2>
        <button>+90</button>
      </nav>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Choosens;
