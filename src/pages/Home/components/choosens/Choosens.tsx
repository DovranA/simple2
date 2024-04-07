import { Saylanan, Saylananlar } from "../../../../types/home";
import Card from "./card";
import styles from "./style.module.scss";
type Props = {
  data: Saylananlar;
};
const Choosens = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <nav>
        <h2>Sayalannalar</h2>
        <button>+{data.total}</button>
      </nav>
      <div className={styles.cards}>
        {data.details.map((item: Saylanan) => (
          <Card key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Choosens;
