import styles from "./about.module.scss";
import AboutBanner from "./components/Banner";
import TopLink from "../../components/TopLink/TopLink";
import AboutContent from "./components/Content";
const About = () => {
  return (
    <div className="container">
      <div className={styles.about}>
        <TopLink location="Biz barada" />
        <AboutBanner img="/card1.png" />
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
