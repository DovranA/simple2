import { Link } from "react-router-dom";
import styles from "./style.module.scss";

type Props = {
  title: string;
  btnTitle: string | number;
  img: string;
  link: string;
};
const ThinContainer = ({ title, btnTitle, img, link }: Props) => {
  return (
    <div className={styles.container}>
      <nav>
        <h2>{title}</h2>
        <Link to={link}>
          <button>{btnTitle}</button>
        </Link>
      </nav>
      <div className={styles.imgContainer}>
        <Link to={link}>
          <img src={img} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ThinContainer;
