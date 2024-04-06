import styles from "./style.module.scss";

type Props = {
  title: string;
  btnTitle: string | number;
  img: string;
};
const ThinContainer = ({ title, btnTitle, img }: Props) => {
  return (
    <div className={styles.container}>
      <nav>
        <h2>{title}</h2>
        <button>{btnTitle}</button>
      </nav>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ThinContainer;
