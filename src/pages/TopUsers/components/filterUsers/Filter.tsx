import styles from "./styles.module.scss";
import RankButton from "../../../../components/Rank/RankButton";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaBitcoin } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  SlctUserActiveBtn,
  setUserActiveBtn,
} from "../../../../features/rankSlice";

const FilterBtns = () => {
  const dispatch = useAppDispatch();

  const activeBtn = useAppSelector(SlctUserActiveBtn);

  return (
    <div className={styles.filterBtns}>
      <RankButton
        onClick={() => dispatch(setUserActiveBtn(0))}
        active={activeBtn === 0 ? true : false}
      >
        {activeBtn === 0 ? (
          <IoIosHeart size={22} color="red" />
        ) : (
          <IoIosHeartEmpty size={22} />
        )}
      </RankButton>
      <RankButton
        onClick={() => dispatch(setUserActiveBtn(1))}
        active={activeBtn === 1 ? true : false}
      >
        <IoEyeOutline color={activeBtn === 1 ? "white" : "black"} size={20} />
      </RankButton>
      <RankButton
        onClick={() => dispatch(setUserActiveBtn(2))}
        active={activeBtn === 2 ? true : false}
      >
        <FaBitcoin color="FF9800" size={20} />
      </RankButton>
    </div>
  );
};

export default FilterBtns;
