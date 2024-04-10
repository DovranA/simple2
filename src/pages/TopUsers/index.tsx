import { IoIosHeart } from "react-icons/io";
import TopLink from "../../components/TopLink/TopLink";
import FilterBtns from "./components/filterUsers/Filter";
import { IoEyeOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  SlctUsersRankData,
  SlctUserActiveBtn,
  handleUserFetch,
  setUserActiveBtn,
} from "../../features/rankSlice";
import { useEffect } from "react";
import Slider from "../Home/components/slider/Slider";
import Table from "./components/table/Table";

const TopUsers = () => {
  const dispatch = useAppDispatch();
  const IconArr = [
    <IoIosHeart size={22} color="red" />,
    <IoEyeOutline size={20} />,
    <img src="/coin.png" width={20} height={20} alt="" />,
  ];

  useEffect(() => {
    dispatch(handleUserFetch("likes"));
    dispatch(setUserActiveBtn(0));
  }, []);

  const data = useAppSelector(SlctUsersRankData);

  const active = useAppSelector(SlctUserActiveBtn);
  return (
    <div className="container">
      <TopLink location="Top Ulanjylar" />
      <Slider image={data.banner.images} />
      <FilterBtns />
      <Table active={active} data={data.userprofle} icons={IconArr} />
    </div>
  );
};

export default TopUsers;
