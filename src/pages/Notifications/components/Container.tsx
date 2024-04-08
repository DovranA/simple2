import { useRef } from "react";
import Card from "./card";
import styles from "./styles.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Container = () => {
  const wrapperRef = useRef<any>(null);
  const handleScroll = (direction: number) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: 900 * direction,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.arrBtn} onClick={() => handleScroll(-1)}>
        <IoIosArrowBack size={30} />
      </span>
      <div ref={wrapperRef} className={styles.wrapper}>
        <Card />
        <Card />
        <Card />
      </div>
      <span onClick={() => handleScroll(1)} className={styles.arrBtn}>
        <IoIosArrowForward size={30} />
      </span>
    </div>
  );
};

export default Container;
