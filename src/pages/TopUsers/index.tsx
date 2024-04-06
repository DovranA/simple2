import Banner from "../../components/Banner/Banner";
import TopLink from "../../components/TopLink/TopLink";
import FilterBtns from "./components/filterVideos/Filter";
import Table from "./components/table/Table";

const TopUsers = () => {
  return (
    <div className="container">
      <TopLink location="Top Ulanjylar" />
      <Banner />
      <FilterBtns />
      <Table />
    </div>
  );
};

export default TopUsers;
