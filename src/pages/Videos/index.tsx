import TopLink from "../../components/TopLink/TopLink";
import Categories from "./components/Categories";
import styles from "./videos.module.scss";
const Videos = () => {
  return (
    <div className="container">
      <TopLink location="Wideolar" />
      <Categories />
    </div>
  );
};

export default Videos;
