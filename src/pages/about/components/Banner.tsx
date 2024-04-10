import styles from "./styles.module.scss";
type Props = {
  img: string;
};
const AboutBanner = ({ img }: Props) => {
  return (
    <div className={styles.banner}>
      <img src={img} alt="banner" />
    </div>
  );
};

export default AboutBanner;
