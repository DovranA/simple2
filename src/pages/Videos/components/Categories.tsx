import { useRef } from "react";
import styles from "./styles.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Categories = () => {
  const wrapperRef = useRef<any>(null);

  const handleScrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: -100, behavior: "smooth" }); // Scroll left by 100px smoothly
    }
  };

  const handleScrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: 100, behavior: "smooth" }); // Scroll left by 100px smoothly
    }
  };

  return (
    <div className={styles.categories}>
      <button className={styles.moveBtns} onClick={() => handleScrollLeft()}>
        <IoIosArrowBack />
      </button>
      <div ref={wrapperRef} className={styles.wrapper}>
        <span className={styles.activeBtn}>
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
      {/* <div className={styles.dropdown}>
        <div className={styles.noCate}>
          <h2>No Category</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Categories;
