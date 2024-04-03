import Choosens from "./components/choosens/Choosens";
import Player from "./components/modals/Player";
import Pinned from "./components/pinned/Pinned";
import Slider from "./components/slider/Slider";
import styles from "./home.module.scss";
import ThinContainer from "../../components/ThinContainer";

const Home = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <ThinContainer title="Top Ulanjylar" btnTitle="Hemmesi" />
      <Choosens />
      <ThinContainer title="Top Wideolar" btnTitle="Hemmesi" />
      <div className={styles.flexDiv}>
        <ThinContainer title="Trendlar" btnTitle="+90" />
        <ThinContainer title="Brendlar" btnTitle="Hemmesi" />
      </div>
      <Pinned />

      {false ? <Player /> : null}
    </div>
  );
};

export default Home;
