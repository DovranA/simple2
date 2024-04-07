import { IoIosHeart } from "react-icons/io";
import Banner from "../../components/Banner/Banner";
import Table from "../../components/RankTable/Table";
import TopLink from "../../components/TopLink/TopLink";
import FilterBtns from "./components/filterVideos";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";
import { SlctVideosActiveBtn } from "../../features/rankSlice";

const TopVideos = () => {
  const IconArr = [
    <IoIosHeart size={22} color="red" />,
    <IoShareSocialOutline size={20} />,
    <FaDownload size={20} />,
  ];
  const active = useAppSelector(SlctVideosActiveBtn);
  return (
    <div className="container">
      <TopLink location="Top Wideolar" />
      <Banner />
      <FilterBtns />
      <Table icons={IconArr} active={active} />
    </div>
  );
};

export default TopVideos;
