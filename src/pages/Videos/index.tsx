import TopLink from "../../components/TopLink/TopLink";
import VideoCards from "../../components/VideoCards/VideoCards";
import Categories from "./components/Categories";
const Videos = () => {
  return (
    <div className="container">
      <TopLink location="Wideolar" />
      <Categories />
      <VideoCards />
    </div>
  );
};

export default Videos;
