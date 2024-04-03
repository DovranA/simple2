import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import {
  IoIosArrowBack,
  IoIosArrowDropleft,
  IoIosArrowForward,
} from "react-icons/io";
const Categories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const wrapperRef = useRef(null);

  const handleScrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: -100, behavior: "smooth" }); // Scroll left by 100px smoothly
    }
  };

  const handleScrollRight = () => {
    if (wrapperRef.current) {
      //   wrapperRef.current.scrollLeft = wrapperRef.current.scrollWidth;
      wrapperRef.current.scrollBy({ left: 100, behavior: "smooth" }); // Scroll left by 100px smoothly
    }
  };

  //   useEffect(() => {
  //     if (
  //       wrapperRef.current &&
  //       wrapperRef.current.scrollWidth > wrapperRef.current.offsetWidth
  //     ) {
  //       setScrollPosition(
  //         wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth
  //       );
  //     }
  //   }, []);

  return (
    <div className={styles.categories}>
      <button className={styles.moveBtns} onClick={() => handleScrollLeft()}>
        <IoIosArrowBack />
      </button>
      <div ref={wrapperRef} className={styles.wrapper}>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.btn}>
          <p>Mebel we oy bezeg</p>
          <IoIosArrowForward />
        </span>
      </div>
      <button className={styles.moveBtns} onClick={() => handleScrollRight()}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Categories;
