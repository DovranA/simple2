import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
type Props = {
  current: number
  setCurrent: () => void
}
const Categories = ({ current, setCurrent }: Props) => {
  const wrapperRef = useRef<any>(null)

  const handleScroll = (direction: number) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: 100 * direction,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={styles.categories}>
      <button className={styles.moveBtns} onClick={() => handleScroll(-1)}>
        <IoIosArrowBack />
      </button>

      <div ref={wrapperRef} className={styles.wrapper}>
        {Array.from(Array(10).keys()).map((_, idx) => {
          return (
            <span
              key={idx}
              className={`${styles.btn}  ${
                current === idx && styles.activeBtn
              }`}
            >
              <p>Mebel we oy bezeg</p>
              <IoIosArrowForward />
            </span>
          )
        })}
      </div>
      <button className={styles.moveBtns} onClick={() => handleScroll(1)}>
        <IoIosArrowForward />
      </button>
      {/* <div className={styles.dropdown}>
        <div className={styles.noCate}>
          <h2>No Category</h2>
        </div>
      </div> */}
    </div>
  )
}

export default Categories
