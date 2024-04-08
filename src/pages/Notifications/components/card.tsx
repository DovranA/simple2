import styles from "./styles.module.scss";
const Card = () => {
  return (
    <div className={styles.outCard}>
      <div className={styles.card}>
        <span className={styles.profile}>
          <img src="/card1.png" alt="" />
          <h3>Nur Yupek</h3>
        </span>
        <img className={styles.bannerImg} src="/card1.png" alt="" />
        <div></div>
      </div>
    </div>
  );
};

export default Card;
