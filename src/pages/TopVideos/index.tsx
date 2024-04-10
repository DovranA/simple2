import { IoIosHeart } from "react-icons/io";
import TopLink from "../../components/TopLink/TopLink";
import FilterBtns from "./components/filterVideos";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  SlctVideosRankData,
  SlctVideosActiveBtn,
  handleVideosFetch,
  setVideosActiveBtn,
} from "../../features/rankSlice";
import Slider from "../Home/components/slider/Slider";
import { useEffect } from "react";
import Table from "./components/Table";

const TopVideos = () => {
  const dispatch = useAppDispatch();
  const IconArr = [
    <IoIosHeart size={22} color="red" />,
    <IoShareSocialOutline size={20} />,
    <FaDownload size={20} />,
  ];
  const active = useAppSelector(SlctVideosActiveBtn);
  const data = useAppSelector(SlctVideosRankData);
  useEffect(() => {
    dispatch(handleVideosFetch("likes"));
    dispatch(setVideosActiveBtn(0));
  }, []);

  return (
    <div className="container">
      <TopLink location="Top Wideolar" />
      <Slider image={data.banner.images} />
      <FilterBtns />
      <Table icons={IconArr} active={active} data={data.videos} />
    </div>
  );
};

export default TopVideos;
