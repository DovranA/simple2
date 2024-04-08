import styles from "./styles.module.scss";
import RankButton from "../../../components/Rank/RankButton";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

import { FaDownload } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  SlctVideosActiveBtn,
  handleVideosFetch,
  setVideosActiveBtn,
} from "../../../features/rankSlice";

const FilterBtns = () => {
  const dispatch = useAppDispatch();

  const activeBtn = useAppSelector(SlctVideosActiveBtn);

  return (
    <div className={styles.filterBtns}>
      <RankButton
        onClick={() => {
          dispatch(handleVideosFetch("likes"));
          dispatch(setVideosActiveBtn(0));
        }}
        active={activeBtn === 0 ? true : false}
      >
        {activeBtn === 0 ? (
          <IoIosHeart size={22} color="red" />
        ) : (
          <IoIosHeartEmpty size={22} />
        )}
      </RankButton>
      <RankButton
        onClick={() => {
          dispatch(handleVideosFetch("shares"));
          dispatch(setVideosActiveBtn(1));
        }}
        active={activeBtn === 1 ? true : false}
      >
        <IoShareSocialOutline
          color={activeBtn === 1 ? "white" : "black"}
          size={20}
        />
      </RankButton>
      <RankButton
        onClick={() => {
          dispatch(handleVideosFetch("downloads"));
          dispatch(setVideosActiveBtn(2));
        }}
        active={activeBtn === 2 ? true : false}
      >
        <FaDownload color={activeBtn === 2 ? "white" : "black"} size={20} />
      </RankButton>
    </div>
  );
};

export default FilterBtns;
