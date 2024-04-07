import { IoIosHeart } from "react-icons/io";
import Banner from "../../components/Banner/Banner";
import TopLink from "../../components/TopLink/TopLink";
import FilterBtns from "./components/filterUsers/Filter";
import Table from "../../components/RankTable/Table";
import { IoEyeOutline } from "react-icons/io5";
import { FaBitcoin } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";
import { SlctUserActiveBtn } from "../../features/rankSlice";

const TopUsers = () => {
  const IconArr = [
    <IoIosHeart size={22} color="red" />,
    <IoEyeOutline size={20} />,
    <FaBitcoin color="FF9800" size={20} />,
  ];

  const active = useAppSelector(SlctUserActiveBtn);
  return (
    <div className="container">
      <TopLink location="Top Ulanjylar" />
      <Banner />
      <FilterBtns />
      <Table active={active} icons={IconArr} />
    </div>
  );
};

export default TopUsers;
