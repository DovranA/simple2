import { useEffect, useRef } from 'react'
import Card from './card'
import styles from './styles.module.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
const Container = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    mainRef.current?.focus()
  }, [])
  const handleScroll = (direction: number) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: 900 * direction,
        behavior: 'smooth',
      })
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowLeft':
        handleScroll(-1)
        break
      case 'ArrowRight':
        handleScroll(1)
        break
    }
  }
  return (
    <div
      className={styles.container}
      ref={mainRef}
      tabIndex={-1}
      onKeyDown={handleKey}
    >
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
  )
}

export default Container
